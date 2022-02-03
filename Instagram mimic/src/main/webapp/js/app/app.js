class Model {
    constructor() {
        // this.feeds = this.getFeeds() || [];
        this.getContactId();
        this.getContactName();
        this.getFeeds();


    }

    bindFeedListChanged(callback) {
        this.onFeedListChanged = callback;
    }

    async getContactId() {
        let contactId;
        const url = "/getId";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            contactId = await response.text();
            console.log(contactId);
            this.creatorId = contactId;
        } catch (e) {
            console.error(e);
        }

    }

    async getContactName() {
        let contactName;
        const url = "/getName";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            contactName = await response.text();
            console.log(contactName);
            this.creatorName = contactName;
        } catch (e) {
            console.error(e);
        }

    }

    async getFeeds() {
        const url = "/api/v1/feeds/my";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            const feeds = await response.json();
            this.feedList = feeds;
            console.log(this.feedList);
            return feeds;
        } catch (e) {
            console.error(e);
            this.feedList = [];
            return this.feedList;
        }

    }


    async saveFeed(feed) {

        if (feed != null) {
            try {
                feed.creatorId = this.creatorId;
                feed.creatorName = this.creatorName;
            } catch (e) {
                console.error(e);
            }
            const url = "/api/v1/feeds/my"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(feed),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors"
                });

                console.log(response);
                if (response) {
                    console.log("posted feed");
                    // window.location.reload();
                }
            } catch (e) {
                console.error(e);
                console.log("unable to post");
            }
        }
    }

    async processLogout() {
        const url = "/logout";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            const message = await response.text();
            console.log(message);
            if (message == "done") {
                window.location.replace("https://kedhar-internship.appspot.com");
            }
        } catch (e) {
            console.error(e);
        }
    }

    async saveLike(feedId) {
        const url = "/api/v1/feeds/" + feedId + "/cheer";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            const message = await response.text();
            console.log(message);
        } catch (e) {
            console.error(e);
        }
    }

    async saveComment(comment) {
        if (comment != null) {
            const url = "/api/v1/feeds/comments"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(comment),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors"
                });

                console.log(response);
                if (response) {
                    console.log("posted comment");
                }
            } catch (e) {
                console.error(e);
                console.log("unable to post");
            }
        }
    }

    async deleteFeed(feedId) {
        const url = "/api/v1/feeds/" + feedId + "/delete";
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);
            const message = await response.text();
            console.log(message);
        } catch (e) {
            console.error(e);
        }
    }

    async getCommentList(feedId) {
        const url = "/api/v1/feeds/" + feedId + "/comments";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);
            const commentList = await response.json();
            console.log(commentList);
            return commentList;
        } catch (e) {
            console.error(e);
        }
    }

}



class View {
    constructor() {
        this.logoutBtn = this.getElement("#logoutBtn");
        this.newFeed;
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }


    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    async displayFeed(handler, handlerLike, handlerSaveCmnt, handlerGetCommentList, handlerDeleteFeed) {
        const feedList = await handler();
        console.log(feedList);
        this.feedList = feedList;
        const feedUl = document.querySelector("#feedUl");
        if (feedList.length === 0) {
            const h2 = this.createElement("h2");
            h2.innerText = "No feeds to show , add friend or post new feed ?";
            feedUl.append(h2);
        } else {
            feedList.forEach(feed => {
                let liked = "";

                let likesCount = "";
                let commentCount = "";
                try {
                    if ((feed.cheersContactId).includes(feed.creatorId)) {
                        liked = "active";
                    }
                    if ((feed.cheersContactId).length) {
                        likesCount = (feed.cheersContactId).length;
                    }
                    if ((feed.commentId).length) {
                        commentCount = (feed.commentId).length;
                    }
                } catch (e) {
                    console.error(e);
                }
                const li = this.createElement("li");

                li.innerHTML = `<div class="bg-white p-2">

                                    <div class="d-flex flex-row user-info"><img class="rounded-circle"
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            width="40">
                                        <div class="d-flex flex-column justify-content-start ml-2"><span
                                                class="d-block font-weight-bold name">${feed.creatorName}</span><span
                                                class="date text-black-50">${feed.createdAt}</span></div>
                                    </div>
                                    <div class="mt-2">
                                        <p class="comment-text">${feed.content}
                                        </p>
                                    </div>
                                </div>
                                <div class="bg-white p-2">
                                    <div class="d-flex flex-row fs-12">
                                        <div class="like p-2 cursor " ><i class="fa fa-thumbs-o-up " ></i><span
                                                class="ml-1 cheer ${liked}" data-feedid=${feed.id}>${likesCount} Like</span>
                                        </div>
                                        <div class="like p-2 cursor action-collapse" data-toggle="collapse"
                                            aria-expanded="true" aria-controls="collapse-${feed.id}" href="#collapse-${feed.id}"><i
                                                class="fa fa-commenting-o"></i><span class="ml-1 cmntul" data-feedid=${feed.id}>${commentCount} Comments</span></div>
                                                <div class="like p-2 cursor action-collapse"><i class="fa fa-share"></i><span
                                                class="ml-1 dltfeed" data-feedid=${feed.id}>Delete</span></div>
                                    </div>
                                </div>
                                <div id="collapse-${feed.id}" class="bg-light p-2 collapse" data-parent="#myGroup">
                                <ul class="cmntlist" id="ul${feed.id}" ><li><div class="d-flex flex-row align-items-start "  ><img class="rounded-circle"
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            width="40"><textarea
                                            class="form-control ml-1 shadow-none textarea "  id="cmntcontent${feed.id}"></textarea>
                                    </div></li></ul>
                                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none cmntBtn" data-feedid=${feed.id} data-creatorid=${feed.creatorId} 
                                            type="button">Post comment</button><button
                                            class="btn btn-outline-primary btn-sm ml-1 shadow-none cursor action-collapse" data-toggle="collapse"
                                            aria-expanded="true" aria-controls="collapse-${feed.id}" href="#collapse-${feed.id}"
                                            type="button">Cancel</button>
                                    </div>
                                </div>
                                <hr class="divider">`

                feedUl.append(li);
            });
            if (feedList) {
                this.onClickToggleLike(handlerLike);
                this.onClickCreateCommentObject(handlerSaveCmnt);
                this.onClickDisplayComments(handlerGetCommentList);
                this.onclickDeletePost(handlerDeleteFeed);
            }
        }
    }

    // async displayUtils(handler, handlerLike, handlerSaveCmnt, handlerGetCommentList, handlerDeleteFeed) {
    //     let feedList = await handler();
    //     if (feedList) {
    //         this.onClickToggleLike(handlerLike);
    //         this.onClickCreateCommentObject(handlerSaveCmnt);
    //         this.onClickDisplayComments(handlerGetCommentList);
    //         this.onclickDeletePost(handlerDeleteFeed);
    //     }
    // }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }


    onClickLogout(logout) {
        this.logoutBtn.addEventListener("click", logout)
    }


    onClickCreateFeedObject(handler) {
        let feed;
        document.querySelector("#feedSubmit").addEventListener("click", (e) => {
            e.preventDefault();
            const message = document.querySelector("#message").value;

            feed = {
                id: this.generateUniqueId(),
                content: message,
                createdAt: Date.now(),
                editedAt: Date.now(),
            }
            this.newFeed = feed;
            console.log(this.newFeed);
            handler(this.newFeed);
        });


    }

    async onClickToggleLike(handler) {
        console.log(handler);
        let feedId;
        try {
            // let likes = await handler2();
            let likes = document.querySelectorAll(".cheer");
            console.log(likes);
            Array.from(likes).forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (elem.classList.contains("active")) {
                        elem.classList.remove("active");
                    } else {
                        elem.classList.add("active");
                    }

                    feedId = elem.getAttribute("data-feedid");
                    console.log(feedId);
                    handler(feedId);
                    return feedId;
                });
            });
        } catch (e) {
            console.error(e);
        }

    }

    async onClickCreateCommentObject(handler) {

        try {
            // let postComments = await handler2();
            let postComments = document.querySelectorAll(".cmntBtn");
            console.log(postComments);
            Array.from(postComments).forEach(elem => {
                elem.addEventListener("click", (e) => {
                    e.preventDefault();
                    let feedId = elem.getAttribute("data-feedid");
                    let creatorId = elem.getAttribute("data-creatorid");
                    const message = document.querySelector("#cmntcontent" + feedId).value;

                    const comment = {
                        id: this.generateUniqueId(),
                        feedId: feedId,
                        creatorId: creatorId,
                        content: message,
                        createdAt: Date.now(),
                        editedAt: Date.now(),
                    }

                    console.log(comment);
                    handler(comment);
                });
            });
        } catch (e) {
            console.error(e);
        }

    }

    async onclickDeletePost(handler) {
        try {
            // let deleteFeed = await handler2();
            let deleteFeed = document.querySelectorAll(".dltfeed");
            console.log(deleteFeed);
            Array.from(deleteFeed).forEach(elem => {
                elem.addEventListener("click", (e) => {
                    e.preventDefault();
                    let feedId = elem.getAttribute("data-feedid");

                    handler(feedId);
                });
            });
        } catch (e) {
            console.error(e);
        }
    }

    async onClickDisplayComments(handler) {
        // let commentUl = await handler2();


        try {
            let commentUl = document.querySelectorAll(".cmntul");
            Array.from(commentUl).forEach(elem => {
                elem.addEventListener("click", async (e) => {
                    e.preventDefault();
                    let feedId = elem.getAttribute("data-feedid");
                    const ul = document.querySelector("#ul" + feedId);
                    console.log(ul.children.length);
                    if (ul.children.length < 2) {
                        const commentList = await handler(feedId);

                        console.log(commentList);
                        commentList.forEach(comment => {
                            const li = this.createElement("li");
                            li.innerHTML = `<div class="d-flex flex-row align-items-start "  ><img class="rounded-circle"
src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
width="40"><p class="form-control ml-1 shadow-none textarea "  ">${comment.content}</p></div>`;

                            ul.prepend(li);

                        });
                    }
                });
            });
        } catch (e) {
            console.error(e);
        }

    }

}


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onClickCreateFeedObject(this.processAddFeed);

        this.view.displayFeed(this.bindFeedDisplay, this.model.saveLike, this.processAddcomment, this.model.getCommentList, this.model.deleteFeed);

        // this.view.displayUtils(this.bindFeedDisplay, this.model.saveLike, this.processAddcomment, this.model.getCommentList, this.model.deleteFeed);

        this.bindLogout(this.model.processLogout);

        //    this.view.onClickToggleLike(this.model.saveLike, this.bindFeedDisplay);

        //  this.view.onClickCreateCommentObject(this.processAddcomment, this.bindFeedDisplay);

        // this.view.onclickDeletePost(this.model.deleteFeed, this.bindFeedDisplay)

        // this.view.onClickDisplayComments(this.model.getCommentList, this.bindFeedDisplay);
    }



    bindFeedDisplay = () => {
        return this.model.getFeeds();
    }

    processAddFeed = feed => {
        this.model.saveFeed(feed);
    }

    bindLogout = processLogout => {
        this.view.onClickLogout(processLogout);
    }

    processAddcomment = comment => {
        this.model.saveComment(comment);
    }


}

const app = new Controller(new Model(), new View());