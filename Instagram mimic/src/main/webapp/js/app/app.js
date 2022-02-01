class Model {
    constructor() {
        // this.feeds = this.getFeeds() || [];
        this.getContactId();
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

    async getFeeds() {
        const url = "/api/v1/feeds/home";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors"
            });

            console.log(response);
            this.feedList = await response.json();
            console.log(feedList);

        } catch (e) {
            console.error(e);
            this.feedList = [];
        }
    }


    async saveFeed(feed) {

        if (feed != null) {
            try {
                feed.creatorId = this.creatorId;
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
                    alert("posted feed");
                    // window.location.reload();
                }
            } catch (e) {
                console.error(e);
                alert("unable to post");
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

    displayFeed(feedList) {
        const feedUl = document.querySelector("#feedUl");
        if (feedList.length === 0) {
            const h2 = this.createElement("h2");
            h2.innerText = "No feeds to show , add friend or post new feed ?";
            feedUl.append(h2);
        } else {
            feedList.forEach(feed => {


                const li = this.createElement("li");

                li.innerHTML = `<div class="bg-white p-2">

                                    <div class="d-flex flex-row user-info"><img class="rounded-circle"
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            width="40">
                                        <div class="d-flex flex-column justify-content-start ml-2"><span
                                                class="d-block font-weight-bold name">Ranga</span><span
                                                class="date text-black-50">Shared time - Jan 2022</span></div>
                                    </div>
                                    <div class="mt-2">
                                        <p class="comment-text">${feed.content}
                                        </p>
                                    </div>
                                </div>
                                <div class="bg-white p-2">
                                    <div class="d-flex flex-row fs-12">
                                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span
                                                class="ml-1">Like</span>
                                        </div>
                                        <div class="like p-2 cursor action-collapse" data-toggle="collapse"
                                            aria-expanded="true" aria-controls="collapse-4" href="#collapse-4"><i
                                                class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                                        <div class="like p-2 cursor action-collapse" data-toggle="collapse"
                                            aria-expanded="true" aria-controls="collapse-4" href="#collapse-4"><i
                                                class="fa fa-share"></i><span class="ml-1">Edit</span></div>
                                    </div>
                                </div>
                                <div id="collapse-4" class="bg-light p-2 collapse" data-parent="#myGroup">
                                    <div class="d-flex flex-row align-items-start"><img class="rounded-circle"
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            width="40"><textarea
                                            class="form-control ml-1 shadow-none textarea"></textarea>
                                    </div>
                                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none"
                                            type="button">Post comment</button><button
                                            class="btn btn-outline-primary btn-sm ml-1 shadow-none"
                                            type="button">Cancel</button>
                                    </div>
                                </div>
                                <hr class="divider">`
            });
            feedUl.append(li);
        }
    }

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






}


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onClickCreateFeedObject(this.processAddFeed);
        // this.model.bindFeedListChanged(this.onFeedListChanged);
        this.view.displayFeed(this.model.feedList);
        //   this.onFeedListChanged(this.model.feeds);
        this.bindLogout(this.model.processLogout);
    }

    // onFeedListChanged = feeds => {
    //     this.view.displayFeed(feeds);
    // }

    processAddFeed = feed => {
        this.model.saveFeed(feed);
    }

    bindLogout = processLogout => {
        this.view.onClickLogout(processLogout);
    }

}

const app = new Controller(new Model(), new View());