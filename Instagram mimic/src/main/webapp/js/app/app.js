class Model {
    constructor() {
        // this.feeds = this.getFeeds() || [];
        // this.myContact = this.getMyContact();
        // this.getContactName();
        // this.getFeeds();


    }

    bindFeedListChanged(callback) {
        this.onFeedListChanged = callback;
    }

    async getContactId() {

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
            let contactId = await response.text();
            console.log(contactId);
            return contactId;
        } catch (e) {
            console.error(e);
        }

    }

    async getContactName() {

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
            let contactName = await response.text();
            console.log(contactName);
            return contactName;
        } catch (e) {
            console.error(e);
        }

    }

    async getMyContact() {

        const url = "/myContact";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            const contact = await response.json();
            console.log(contact);
            return contact;
        } catch (e) {
            console.error(e);
        }
    }

    async getFriendList(contactId) {
        const url = "api/v1/contact/" + contactId + "/friends";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            const friendList = await response.json();
            console.log(friendList);
            return friendList;
        } catch (e) {
            console.error(e);
        }
    }

    async getMyFeeds() {
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
            return feeds;
        } catch (e) {
            console.error(e);

        }

    }


    async saveFeed(feed) {
        if (feed != null) {

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
                }
                return response;
            } catch (e) {
                console.error(e);
                console.log("unable to post");
                return null;
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
            return message;
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

    async getAllContacts() {
        const url = "/api/v1/contact/allContacts";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);
            const contactList = await response.json();
            console.log(contactList);
            return contactList;

        } catch (e) {
            console.error(e);
        }
    }

    async getUserFeed(contactId) {
        const url = "/api/v1/feeds/" + contactId;
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);
            const feedList = await response.json();
            console.log(feedList);
            return feedList;

        } catch (e) {
            console.error(e);
        }
    }

    async toggleFriendList(contactId) {
        const url = "/api/v1/contact/" + contactId + "/addFriend";
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);

        } catch (e) {
            console.error(e);
        }

    }

    async saveEditContact(contact) {
        console.log(contact);
        if (contact != null) {
            const url = "/api/v1/contact/edit"
            try {
                const response = await fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors"
                });

                const message = await response.text();
                return message;
            } catch (e) {
                console.error(e);
            }
        }
    }

    async getUserContact(contactId) {
        const url = "/api/v1/contact/" + contactId;
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            const contact = await response.json();
            return contact;

        } catch (e) {
            console.error(e);
        }
    }

    async getHomeFeeds() {
        const url = "/api/v1/contact/home";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors"
            });
            console.log(response);
            const feeds = await response.json();
            if (feeds) {
                console.log(feeds);
                return feeds;
            }
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

    async onClickHome(getHomeFeeds, handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact) {
        const homeBtn = document.querySelector("#homeBtn");
        homeBtn.addEventListener("click", async (e) => {
            const navButtons = document.querySelectorAll(".nav-linkBlack");
            Array.from(navButtons).forEach(elem => {
                elem.style.background = "none";
                elem.style.color = "lightgoldenrodyellow";
            });

            homeBtn.style.background = "rgba(249, 255, 254, 0.966)";
            homeBtn.style.color = "#222222";

            document.querySelector("#friendListUltop").innerHTML = "";
            document.querySelector("#feedUl").innerHTML = "";
            document.querySelector("#friendListUltop").innerHTML = "";
            document.querySelector("#profileUl").innerHTML = "";
            document.querySelector("#tempUl").innerHTML = "";
            try {
                document.querySelector("#loading-image").style.display = "block";

                this.processHomedisplay(getHomeFeeds, handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact);
            } finally {
                document.querySelector("#loading-image").style.display = "none";

            }
        });


    }

    async processHomedisplay(getHomeFeeds, handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact) {

        try {
            document.querySelector("#loading-image").style.display = "block";

            let feedList = await getHomeFeeds();
            if (feedList) {
                Array.from(feedList).forEach(feed => {
                    const contact = getUserContact(feed.creatorId);
                    this.displayFeed(feed, contact);
                });
                this.likeCommentInitializer(handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact);
            }

        }
        finally {
            document.querySelector("#loading-image").style.display = "none";
        }
    }


    async onClickMyFeed(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact) {
        const myFeedsBtn = document.querySelector("#myFeedsBtn");
        myFeedsBtn.addEventListener("click", async (e) => {
            const navButtons = document.querySelectorAll(".nav-linkBlack");
            Array.from(navButtons).forEach(elem => {
                elem.style.background = "none";
                elem.style.color = "lightgoldenrodyellow";
            });
            document.querySelector("#friendListUltop").innerHTML = "";
            document.querySelector("#feedUl").innerHTML = "";
            document.querySelector("#friendListUltop").innerHTML = "";
            document.querySelector("#profileUl").innerHTML = "";
            document.querySelector("#tempUl").innerHTML = "";


            myFeedsBtn.style.background = "rgba(249, 255, 254, 0.966)";
            myFeedsBtn.style.color = "#222222";

            document.querySelector("#loading-image").style.display = "block";

            let feedList = await getMyFeedList();
            let myContact = await getMyContact();
            if (feedList && myContact) {
                document.querySelector("#loading-image").style.display = "none";

                const displayReady = this.displayFeed(feedList, myContact);
                if (displayReady) {
                    this.listenersInitializer(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact);
                }
            }
        });
    }

    listenersInitializer(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact) {
        this.onClickcreateFeed(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact);
        this.onclickDeletePost(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact);
        this.likeCommentInitializer(handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact);
    }

    likeCommentInitializer(handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact) {
        this.onClickToggleLike(handlerLike);
        this.onClickCreateCommentObject(handlerSaveCmnt);
        this.onClickDisplayComments(handlerGetCommentList, getUserContact);
    }

    async onClickcreateFeed(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact) {

        let addFeed = document.querySelector("#feedSubmit");
        addFeed.addEventListener("click", async (e) => {
            e.preventDefault();
            const textArea = document.querySelector("#message");
            const message = textArea.value;
            const myContact = await getMyContact();

            if (myContact) {
                console.log(myContact);
                const feed = {
                    id: this.generateUniqueId(),
                    content: message,
                    createdAt: Date.now(),
                    editedAt: Date.now(),
                    creatorId: myContact.id,
                }
                console.log(feed);
                let storefeeds = await saveFeed(feed);
                textArea.value = "";
                console.log(storefeeds);
                if (storefeeds) {
                    console.log(storefeeds);
                    let newfeeds = await getMyFeedList();
                    if (newfeeds) {
                        document.querySelector("#feedUl").innerHTML = "";
                        let newDisplay = this.displayFeed(newfeeds, myContact);
                        if (newDisplay) {
                            this.listenersInitializer(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact);
                        }

                    }

                }


            }

        });



    }


    async onclickDeletePost(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact) {

        let deleteBtn = document.querySelectorAll(".dltfeed");
        console.log(deleteBtn);
        Array.from(deleteBtn).forEach(elem => {
            elem.addEventListener("click", async (e) => {
                e.preventDefault();
                let feedId = elem.getAttribute("data-feedid");
                let deleteFeed = await removeFeed(feedId);
                console.log(deleteFeed)
                if (deleteFeed) {
                    let newFeedList = await getMyFeedList();
                    console.log(newFeedList);
                    let myContact = await getMyContact();
                    if (newFeedList && myContact) {
                        console.log(newFeedList);
                        document.querySelector("#feedUl").innerHTML = "";

                        let newDisplay = this.displayFeed(newFeedList, myContact);

                        if (newDisplay) {
                            this.listenersInitializer(getMyFeedList, handlerLike, handlerSaveCmnt, handlerGetCommentList, saveFeed, getMyContact, removeFeed, getUserContact);
                        }

                    }
                }



            });
        });

    }

    async displayFeed(feedList, contact) {
        feedList = Array.from(feedList).reverse();
        console.log(feedList);

        // this.feedList = feedList;
        const feedUl = document.querySelector("#feedUl");
        feedUl.prepend(this.displayAddFeed());

        if (feedList.length === 0) {
            const h2 = this.createElement("h2");
            h2.innerText = "No feeds to show , add friend or post new feed ?";
            feedUl.append(h2);
        } else {
            feedList.forEach(feed => {
                let liked = "";

                let likesCount = "";
                let commentCount = "";
                let CreatedDate = new Date(feed.createdAt).toLocaleString();


                try {
                    if ((feed.cheersContactId).includes(feed.creatorId)) {
                        liked = "active";
                    }
                } catch (e) {
                }

                try {
                    if ((feed.cheersContactId).length) {
                        likesCount = (feed.cheersContactId).length;
                    }
                } catch (e) {
                }

                try {
                    if ((feed.commentId).length) {
                        commentCount = (feed.commentId).length;
                    }
                } catch (e) {
                }



                const li = this.createElement("li", "feedli");

                li.innerHTML = `<div class="bg-white p-2 ">

                                    <div class="d-flex flex-row user-info"><img class="rounded-circle"
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            width="40">
                                        <div class="d-flex flex-column justify-content-start ml-2"><span
                                                class="d-block font-weight-bold name">${contact.name}</span><span
                                                class="date text-black-50">${CreatedDate}</span></div>
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

        }
        return true;
    }


    displayAddFeed() {
        const li = this.createElement("li");
        li.innerHTML = `<li>
        <div class="card gedf-card" id="addFeed">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="posts-tab" data-toggle="tab"
                            href="#posts" role="tab" aria-controls="posts"
                            aria-selected="true">Write post</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="images-tab" data-toggle="tab" role="tab"
                            aria-controls="images" aria-selected="false"
                            href="#images">Images</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="posts" role="tabpanel"
                        aria-labelledby="posts-tab">
                        <div class="form-group">
                            <label class="sr-only" for="message">post</label>
                            <textarea class="form-control" id="message" rows="3"
                                placeholder="What are you thinking?"></textarea>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="images" role="tabpanel"
                        aria-labelledby="images-tab">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile">
                                <label class="custom-file-label" for="customFile">Upload
                                    image</label>
                            </div>
                        </div>
                        <div class="py-4"></div>
                    </div>
                </div>
                <div class="btn-toolbar justify-content-between">
                    <div class="btn-group">
                        <button type="submit" id="feedSubmit"
                            class="btn btn-primary">share</button>
                    </div>

                </div>
            </div>
        </div>
    </li>
    <hr class="divider">`;
        return li;
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }


    onClickLogout(logout) {
        this.logoutBtn.addEventListener("click", logout)
    }

    createFeed() {
        return document.querySelector("#feedSubmit");
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
                    const textArea = document.querySelector("#cmntcontent" + feedId);
                    const message = textArea.value;

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
                    textArea.value = "";
                });
            });
        } catch (e) {
            console.error(e);
        }

    }



    async onClickDisplayComments(handler, getUserContact) {
        // let commentUl = await handler2();
        let commentUl = document.querySelectorAll(".cmntul");
        Array.from(commentUl).forEach(elem => {

            let feedId = elem.getAttribute("data-feedid");
            const ul = document.querySelector("#ul" + feedId);




            elem.addEventListener("click", async (e) => {
                e.preventDefault();

                if (ul.children.length < 2) {
                    document.querySelector("#loading-image").style.display = "block";

                    const commentList = await handler(feedId);

                    console.log(commentList);
                    commentList.forEach(comment => {
                        let contact = getUserContact(comment.creatorId);
                        const li = this.createElement("li");
                        if (contact) {
                            li.innerHTML = `<div class="d-flex flex-row align-items-start "  ><img class="rounded-circle"
src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
width="40"><small>${contact.name}</small><p class="form-control ml-1 shadow-none textarea "  ">${comment.content}</p></div>`;

                            ul.prepend(li);
                        }
                    });
                    document.querySelector("#loading-image").style.display = "none";

                }
            });

        });


    }


    async searchPeople(handler, handlerFeed, handlerLike, handlerSaveCmnt, handlerGetCommentList, toggleFriendList, myContacthandler, getUserContact, getFriendList) {
        let contactList = await handler();
        console.log(contactList)

        const userInput = document.querySelector("#searchContactInput");
        userInput.addEventListener("keyup", (e) => {
            e.preventDefault();
            let key = e.target.value.toLowerCase();
            let suggBox = document.querySelector(".search-suggestion");
            let searchInputDiv = document.getElementById("searchInputDiv");
            document.body.addEventListener("mouseup", () => {
                searchInputDiv.classList.remove("active");
                document.querySelector("#friendListUltop").style.display = "";
                document.querySelector("#profileUl").style.display = "";
            });

            if (key != "" && contactList.length !== 0) {
                suggBox.innerHTML = contactList.filter((contact) => {
                    let contactName = contact.name.toLowerCase()
                    return contactName.indexOf(key) != -1;
                }).map((contact) => {

                    return contact = `<li class="li-search" id=search${contact.id} data-contactid=${contact.id} ><img class="rounded-circle"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    width="25">${contact.name} </li>`;

                }).join('');

                searchInputDiv.classList.add("active");
                document.querySelector("#feedUl").style.display = "none";
                document.querySelector("#friendListUltop").style.display = "none";
                document.querySelector("#profileUl").style.display = "none";



                //selecting contact
                this.OnClickSelectContact(handlerFeed, handlerLike, handlerSaveCmnt, handlerGetCommentList, toggleFriendList, myContacthandler, getUserContact, getFriendList);


            } else if (key == "") {
                searchInputDiv.classList.remove("active");
                document.querySelector("#feedUl").style.display = "";
                document.querySelector("#friendListUltop").style.display = "";
                document.querySelector("#profileUl").style.display = "";
            }


        });
    }

    async OnClickSelectContact(handlerFeed, handlerLike, handlerSaveCmnt, handlerGetCommentList, toggleFriendList, myContacthandler, getUserContact, getFriendList) {
        let allList = document.querySelectorAll(".li-search");

        Array.from(allList).forEach((elem) => {

            elem.addEventListener("click", async (e) => {

                document.querySelector("#friendListUltop").innerHTML = "";
                document.querySelector("#profileUl").innerHTML = "";
                document.querySelector("#tempUl").innerHTML = "";

                document.querySelector("#loading-image").style.display = "block";


                const navButtons = document.querySelectorAll(".nav-linkBlack");
                Array.from(navButtons).forEach(elem => {
                    elem.style.background = "none";
                    elem.style.color = "lightgoldenrodyellow";
                });

                const contactId = elem.getAttribute("data-contactid");
                const myContact = await myContacthandler();
                console.log(myContact);
                let userContact = await getUserContact(contactId);

                const name = userContact.name;
                const email = userContact.email;
                let timestamp = userContact.createdAt;
                console.log(timestamp);
                let joinedDate = new Date(+timestamp).toLocaleString();
                let toggleFriend = "follow";
                let btnGroup = "btn-success";
                try {
                    if ((myContact.friendsList).includes(contactId)) {
                        toggleFriend = "unFollow";
                        btnGroup = "btn-danger";
                    }
                } catch (e) {
                    console.error(e);
                }
                this.displayUserProfile(name, userContact, email, joinedDate, btnGroup, toggleFriend);

                let userFeeds = await handlerFeed(contactId);

                let displayReady = this.displayFeed(userFeeds, userContact);
                if (displayReady) {
                    document.querySelector("#addFeed").remove();
                    document.querySelector("#loading-image").style.display = "none";
                    this.likeCommentInitializer(handlerLike, handlerSaveCmnt, handlerGetCommentList, getUserContact);
                    this.toggleFriendBtn(contactId, toggleFriendList);
                    this.removeDeleteBtn();
                    this.onClickViewFriends(userContact, getFriendList);
                }
            });

        });
    }


    removeDeleteBtn() {
        let deleteFeed = document.querySelectorAll(".dltfeed");
        Array.from(deleteFeed).forEach(elem => {
            elem.remove();
        });

    }

    async toggleFriendBtn(contactId, toggleFriendList) {
        let addFriendBtn = document.querySelector("#addFriendBtn");
        addFriendBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            if (addFriendBtn.innerText == "follow") {
                addFriendBtn.classList.remove("btn-success");
                addFriendBtn.classList.add("btn-danger");
                addFriendBtn.innerText = "unFollow";
            } else {
                addFriendBtn.classList.remove("unFollow");
                addFriendBtn.classList.add("btn-success");
                addFriendBtn.innerText = "follow";
            }

            toggleFriendList(contactId);
        });

    }

    displayUserProfile(name, userContact, email, joinedDate, btnGroup, toggleFriend) {
        const feedUl = document.querySelector("#feedUl");
        feedUl.innerHTML = "";


        feedUl.innerHTML = `<li id="profiletest">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="well well-sm">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4">
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                                    width="150" />
                                            </div>
                                            <div class="col-sm-6 col-md-8">
                                                <h4>
                                                    ${name}</h4>
                                                <small><cite title="location">Location : ${userContact.location} <i
                                                            class="glyphicon glyphicon-map-marker">
                                                        </i></cite></small>
                                                <p>
                                                    <i class="glyphicon glyphicon-envelope"></i>Email :
                                                    ${email}
                                                    <br />

                                                    <i class="glyphicon glyphicon-gift"></i>Joined On - ${joinedDate},
                                                </p>


                                                <button type="button" class="btn ${btnGroup} " id="addFriendBtn">
                                                    ${toggleFriend}</button>
                                                <button type="button" class="btn btn-info" id="viewFriends">
                                                    friends</button>
                                                <button type="button" class="btn btn-info">
                                                    mutual friend</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="divider">
                    </li>`;
    }

    async onClickViewFriends(contact, getFriendList) {
        const friendsBtn = document.querySelector("#viewFriends");
        friendsBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            document.querySelector("#feedUl").style.display = "none";
            const tempUl = document.querySelector("#tempUl");

            const br = this.createElement("br");

            const closeBtn = this.createElement("button", "btn-info");
            closeBtn.classList.add("btn");
            closeBtn.setAttribute("id", "closefriends");
            closeBtn.innerText = "close"

            document.querySelector("#loading-image").style.display = "block";
            tempUl.innerHTML = this.displayFriendListHtml();
            document.querySelector("#friendSearch").remove();
            const bottomUl = document.querySelector("#tempUlBottom");
            const friendList = await getFriendList(contact.id);
            if (friendList) {
                document.querySelector("#friendsH3").innerText = `Friends (${friendList.length})`;
                this.displayFriendList(friendList, bottomUl);
            }
            document.querySelector("#loading-image").style.display = "none";

            bottomUl.append(br);

            bottomUl.append(closeBtn);

            closeBtn.addEventListener("click", (e) => {
                tempUl.innerHTML = "";
                document.querySelector("#feedUl").style.display = "block";
                this.onClickViewFriends(contact);
            });
        });
    }


    async onClickMyFriends(getMyContactId, getMyFriendList) {
        const myFreindsBtn = document.querySelector("#navMyFriends");
        myFreindsBtn.addEventListener("click", async (e) => {

            document.querySelector("#feedUl").innerHTML = "";
            document.querySelector("#profileUl").innerHTML = "";
            document.querySelector("#tempUl").innerHTML = "";



            const ul = document.querySelector("#friendListUltop");
            ul.innerHTML = this.displayFriendListHtml();
            const navButtons = document.querySelectorAll(".nav-linkBlack");
            Array.from(navButtons).forEach(elem => {
                elem.style.background = "none";
                elem.style.color = "lightgoldenrodyellow";
            });


            myFreindsBtn.style.background = "rgba(249, 255, 254, 0.966)";
            myFreindsBtn.style.color = "#222222";
            document.querySelector("#loading-image").style.display = "block";

            try {
                let myContactId = await getMyContactId();
                let friendList = await getMyFriendList(myContactId);

                this.displayFriendList(friendList, document.querySelector("#friendListUlbottom"));
                document.querySelector("#friendsH3").innerText = `Friends (${friendList.length})`;

            } finally {
                document.querySelector("#loading-image").style.display = "none";
            }
        });
    }

    displayFriendListHtml() {
        return `<li>
    <div class="container-fluid">
        <div class="row" id="mcl_app">

            <section class="col-12" id="mcl_header_bar">


                <div class="row lower_header_bar">
                    <div class="col-10">
                        <i class="fa fa-chevron-left"></i>
                    </div>
                    <div class="col-2 text-right">
                        <i class="fa fa-plus"></i>
                    </div>
                </div>

                <div class="row heading">
                    <div class="col-12">
                        <h3 id="friendsH3">Friends ()</h3>
                        <div class="row mcl_search_row" id="friendSearch">
                            <div class="col-12">
                                <i class="fa fa-search"></i>
                                <input type="text" class="mcl_ip_search"
                                    placeholder="Search for friends">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="col-12" id="mcl_body">
                <div class="row">
                    <div class="col-10 left_side">
                        <ul id="friendListUlbottom">
                        </ul>
                        <ul id="tempUlBottom"></ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</li>`;

    }

    displayFriendList(friendList, friendListUl) {
        try {
            if (friendList.length === 0 || friendList === undefined) {
                const li = this.createElement("li");
                li.innerHTML = `<h2>No friends to display </h2>`;
                friendListUl.append(li);
            } else {
                friendList.forEach(contact => {
                    const li = this.createElement("li");
                    li.innerHTML = `<div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="">
                <span class="contact_info">
        <a  id="viewProfile" href="#">${contact.name}</a>
                    <br>
                    <span>
                        Chennai,
                        <span class="last_seen">Email :
                            ${contact.email}</span>
                    </span>
                </span>
                
            </div><br>`;
                    friendListUl.append(li);
                });
            }
        } catch (e) {
            console.error(e);
        }

    }

    async onClickMyProfile(getMyContact, saveEditContact) {
        const myProfileBtn = document.querySelector("#myProfileBtn");
        myProfileBtn.addEventListener("click", async (e) => {
            const navButtons = document.querySelectorAll(".nav-linkBlack");
            Array.from(navButtons).forEach(elem => {
                elem.style.background = "none";
                elem.style.color = "lightgoldenrodyellow";
            });
            document.querySelector("#friendListUltop").innerHTML = "";
            document.querySelector("#feedUl").innerHTML = "";
            document.querySelector("#profileUl").innerHTML = "";
            document.querySelector("#tempUl").innerHTML = "";


            myProfileBtn.style.background = "rgba(249, 255, 254, 0.966)";
            myProfileBtn.style.color = "#222222";
            document.querySelector("#loading-image").style.display = "block";

            try {
                let myContact = await getMyContact();
                if (myContact) {
                    let displayReady = this.displayMyProfile(myContact);
                    if (displayReady) {
                        this.onClickEditProfileBtn(myContact, saveEditContact);
                    }
                }
            } finally {
                document.querySelector("#loading-image").style.display = "none";
            }

        });

    }

    async onClickEditProfileBtn(myContact, saveEditContact) {
        const editProfileBtn = document.querySelector("#editProfileBtn");
        editProfileBtn.addEventListener("click", async (e) => {
            profileUl.innerHTML = "";
            document.querySelector("#loading-image").style.display = "block";
            try {
                let displayEdit = this.displayEdit(myContact);
                if (displayEdit) {
                    document.querySelector("#cancelEdit").addEventListener("click", async (e) => {
                        e.preventDefault();
                        const profileUl = document.querySelector("#profileUl");
                        profileUl.innerHTML = "";

                        let displayReaady = this.displayMyProfile(myContact);
                        if (displayReaady) this.onClickEditProfileBtn(myContact, saveEditContact);
                    });

                    this.onClickSaveChangesBtn(myContact, saveEditContact);

                }
            } finally {
                document.querySelector("#loading-image").style.display = "none";

            }
        });
    }


    async onClickSaveChangesBtn(myContact, saveEditContact) {

        const saveChangesBtn = document.querySelector("#saveChanges");
        saveChangesBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const newName = document.querySelector("#name-edit").value;
            const newEmail = document.querySelector("#email-edit").value;
            const newLocation = document.querySelector("#location-edit").value;
            const error = document.querySelector("#emailError-edit");
            if (this.checkValidEmail(newEmail) && newName != "") {
                const newContact = {
                    id: myContact.id,
                    name: newName,
                    email: newEmail,
                    createdAt: myContact.createdAt,
                    editedAt: Date.now(),
                    gender: myContact.gender,
                    location: newLocation,
                }
                console.log(newContact)
                const message = await saveEditContact(newContact);
                if (message == "Existing Email") {
                    error.innerText = "Invalid Email";
                    error.style.color = "red";
                } else {
                    const profileUl = document.querySelector("#profileUl");
                    profileUl.innerHTML = "";

                    this.displayMyProfile(myContact);

                }
            } else if (!this.checkValidEmail(newEmail)) {
                error.innerText = "Invalid Email";
                error.style.color = "red";
            } else if (newName == null) {
                document.querySelector("nameError-edit").innerText = "Enter Name";
                document.querySelector("nameError-edit").style.color = "red";
            }

        });
    }


    displayMyProfile(myContact) {
        const profileUl = document.querySelector("#profileUl");
        let joinedDate = new Date(+(myContact.createdAt)).toLocaleString();

        profileUl.innerHTML = `<li id="profiletest">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="well well-sm">
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    width="150" />
                            </div>
                            <div class="col-sm-6 col-md-8">
                                <h4>
                                    ${myContact.name}</h4>
                                <small><cite title="location">Location : ${myContact.location} <i
                                            class="glyphicon glyphicon-map-marker">
                                        </i></cite></small>
                                <p>
                                    <i class="glyphicon glyphicon-envelope"></i>Email :
                                    ${myContact.email}
                                    <br />

                                    <i class="glyphicon glyphicon-gift"></i>Joined On - ${joinedDate},<br>
                                    <i class="glyphicon glyphicon-gift"></i> Gender - ${myContact.gender},

                                </p>


                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li><br><br>
    <button class="btn btn-primary " id="editProfileBtn" type="button">Edit profile</button>
    `;


        return true;
    }

    checkValidEmail(email) {
        let emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(.[a-z]+)?$/;
        return emailRegex.test(email);
    }


    displayEdit(myContact) {
        const profileUl = document.querySelector("#profileUl");
        profileUl.innerHTML = `<li>

        <div class="profile-pic-edit">
            <label class="-label" for="file-change">
                <span class="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
            </label>
            <input id="file-change" type="file" onchange="loadFile(event)" />
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                id="output" width="160" />
        </div>
        <br><br>
    </li>
    <li>
        <label class="errorLabel-display-edit" id="nameError-edit" for="name-edit">Name :
        </label>
        <input class="userInput" id="name-edit" type="text" value="${myContact.name}" />
        <br><br>
    </li>
    <li>
        <label class="errorLabel-display-edit" id="emailError-edit" for="email-edit">E-mail :
        </label>
        <input class="userInput" id="email-edit" type="email" value="${myContact.email}"/>
        <br><br>
    </li>    
    <li>
    <label class="errorLabel-display-edit" id="locationLabel-edit" for="name">Location :
    </label>
    <input class="userInput" id="location-edit" type="text" />
</li>
    <li>
        <button class="btn btn-success " id="saveChanges" type="button">save changes</button>
        <button class="btn btn-secondary " id="cancelEdit"  type="button">Cancel</button>
    </li><br><br>`;
        return true;
    }




}


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // this.view.onClickCreateFeedObject(this.processAddFeed, this.reloadDisplay, this.reloadDelete);

        this.view.onClickMyFeed(this.model.getMyFeeds, this.model.saveLike, this.model.saveComment, this.model.getCommentList, this.model.saveFeed, this.model.getMyContact, this.model.deleteFeed, this.model.getUserFeed);


        // this.view.onclickDeletePost(this.processDeleteFeed, this.bindFeedDisplay, this.reloadDisplay, this.reloadDelete);

        this.bindLogout(this.model.processLogout);

        this.view.searchPeople(this.model.getAllContacts, this.model.getUserFeed, this.model.saveLike, this.model.saveComment, this.model.getCommentList, this.model.toggleFriendList, this.model.getMyContact, this.model.getUserContact, this.model.getFriendList);

        this.view.onClickMyFriends(this.model.getContactId, this.model.getFriendList);

        this.view.onClickMyProfile(this.model.getMyContact, this.model.saveEditContact);

        this.view.processHomedisplay(this.model.getHomeFeeds, this.model.saveLike, this.model.saveComment, this.model.getCommentList, this.model.getUserContact);

        this.view.onClickHome(this.model.getHomeFeeds, this.model.saveLike, this.model.saveComment, this.model.getCommentList, this.model.getUserContact);



    }




    bindLogout = processLogout => {
        this.view.onClickLogout(processLogout);
    }



}

const app = new Controller(new Model(), new View());