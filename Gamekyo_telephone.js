// ==UserScript==
// @name         Gamekyo Téléphone
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Rend la navigation de Gamekyo meilleure sur les téléphones
// @author       Bourbon
// @match        https://www.gamekyo.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gamekyo.com
// ==/UserScript==

(function () {
  "use strict";

  // Localisation de la page d'accueil
  var currentURL = window.location.href;
  var isHomePage =
    currentURL === "https://www.gamekyo.com/" ||
    currentURL === "https://www.gamekyo.com/index.html";

  //fonction création de boutons
  function createButton(text, onClick) {
    var button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }

  //Fonction pour modifier la page d'accueil
  function modifyHomePage() {
    //Sélection des éléments de la page d'accueil
    var column2 = document.getElementById("column-2");
    var column0 = document.getElementById("column-0");
    var column1 = document.getElementById("column-1");
    var divSlider = document.getElementById("container");
    var divMain = document.getElementById("main-container");
    var titles = document.querySelector(".box-title-external-blue");
    var footer = document.getElementById("footer");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var boxFrame = document.querySelector("div.box-frame");
    var notifications = document.getElementById("notification-allrequest");

    //Style des éléments de la page d'accueil
    if (column2) column2.style.display = "none";
    if (column0) {
      column0.style.width = "100%";
      column0.style.marginTop = "10px";
    }
    if (column1) {
      column1.style.display = "none";
      column1.style.width = "100%";
    }
    if (divSlider) divSlider.style.display = "none";
    if (divMain) divMain.style.width = "100%";
    if (titles) titles.style.textAlign = "center";
    if (footer) footer.style.display = "none";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";

    if (boxFrame) {
      var parentDiv = boxFrame.parentNode;
      parentDiv.parentNode.insertBefore(boxFrame, parentDiv);
    }
    if (notifications) notifications.style.fontSize = "14px";

    //Création de l'entête de la liste des Nexs
    var boxTitleExternalBlue = document.createElement("div");
    boxTitleExternalBlue.className = "box-title-external-blue";
    boxTitleExternalBlue.textContent = "News";
    boxTitleExternalBlue.style.textAlign = "center";

    var column1Element = document.querySelector("div#news-frame");
    if (column1Element) {
      var firstChild = column1Element.firstChild;
      column1Element.insertBefore(boxTitleExternalBlue, firstChild);
    }

    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.gap = "10px";

    //Création des boutons Communauté, News et Nouvel Article + style
    var btnCommunaute = createButton("Communauté", function () {
      column0.style.display = "block";
      column1.style.display = "none";
    });
    btnCommunaute.style.width = "30%";
    btnCommunaute.style.height = "120px";
    btnCommunaute.style.fontSize = "18px";

    var btnNews = createButton("News", function () {
      column0.style.display = "none";
      column1.style.display = "block";
    });
    btnNews.style.width = "30%";
    btnNews.style.height = "120px";
    btnNews.style.fontSize = "18px";

    var btnCreateArticle = createButton("Nouvel article", function () {
      window.location.href = "https://www.gamekyo.com/blog_add_type.html";
    });
    btnCreateArticle.style.width = "30%";
    btnCreateArticle.style.height = "120px";
    btnCreateArticle.style.fontSize = "18px";

    //Placement des boutons en haut de la page
    buttonContainer.appendChild(btnCommunaute);
    buttonContainer.appendChild(btnNews);
    buttonContainer.appendChild(btnCreateArticle);

    if (column0) column0.parentNode.insertBefore(buttonContainer, column0);
  }
  //Fonction pour modifier les différents articles : blogs, groupes, news, videos...
  function modifyArticlePage() {
    //Sélection des élements des différents article.
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column4 = document.getElementById("column-4");
    var column2 = document.getElementById("column-2");
    var column1 = document.getElementById("column-1");
    var youtube = document.querySelectorAll("iframe");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des pages articles
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column4) column4.style.width = "100%";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (youtube) {
      youtube.forEach((iframe) => {
        iframe.style.width = "60%";
        iframe.style.height = "500px";
        iframe.style.marginLeft = "auto";
        iframe.style.marginRight = "auto";
        iframe.style.display = "block";
      });
    }
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
  }
  //Fonction pour modifier la première page de création d'articles
  function modifyCreateArticlePage() {
    //Sélection des éléments de la page
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column2 = document.getElementById("column-2");
    var column1 = document.getElementById("column-1");
    var subMenu = document.getElementById("sub-menu-lign");
    var jeuChoix = document.getElementById("Jeu_choix");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des éléments de la page
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
    if (jeuChoix) jeuChoix.style.width = "100%";
  }
  //Fonction pour modifier la seconde page de création d'articles
  function modifyCreateBlogPage() {
    //Sélection des éléments de la page
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column2 = document.getElementById("column-2");
    var column1 = document.getElementById("column-1");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des éléments de la page
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
  }
  //Fonction pour modifier la page des profils
  function modifyProfilPage() {
    //Sélection des éléments de la page
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column4 = document.getElementById("column-4");
    var column2 = document.getElementById("column-2");
    var column1 = document.getElementById("column-1");
    var youtube = document.querySelectorAll("iframe");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des éléments de la page
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column4) column4.style.width = "100%";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "none";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
  }
  //Fonction pour modifier la page des profils
  function modifyTopPage() {
    //Sélection des éléments de la page
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column2 = document.getElementById("column-2");
    var column1 = document.getElementById("column-1");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des éléments de la page
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
  }
  function modifyBlogPage() {
    //Sélection des éléments de la page
    var divMain = document.getElementById("main-container");
    var column0 = document.getElementById("column-0");
    var column4 = document.getElementById("column-4");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");
    var notifications = document.getElementById("notification-allrequest");
    //Stylisation des éléments de la page
    if (divMain) divMain.style.width = "100%";
    if (column0) column0.style.display = "none";
    if (column4) column4.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
  }
  //Fonction pour modifier la page des messages
  function modifyMessagePage() {
    //Sélection des éléments de la page
    var column0 = document.getElementById("column-0");
    var column1 = document.getElementById("column-1");
    var column2 = document.getElementById("column-2");
    var divMain = document.getElementById("main-container");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var notifications = document.getElementById("notification-allrequest");
    var footer = document.getElementById("footer");
    //Stylisation des éléments de la page
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (divMain) divMain.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
    if (footer) footer.style.display = "none";
    //Création du bouton nouveau message
    var btnNewMessage = createButton("Nouveau message", function () {
      window.location.href = "https://www.gamekyo.com/new_message.html";
    });
    btnNewMessage.style.width = "40%";
    btnNewMessage.style.height = "120px";
    btnNewMessage.style.fontSize = "18px";
    btnNewMessage.style.display = "block";
    btnNewMessage.style.marginLeft = "auto";
    btnNewMessage.style.marginRight = "auto";

    if (column1) column1.parentNode.insertBefore(btnNewMessage, column1);
  }
  //Fonction pour modifier la page d'envoi de message
  function modifyNewMessagePage() {
    //Sélection des éléments de la page
    var column0 = document.getElementById("column-0");
    var column1 = document.getElementById("column-1");
    var column2 = document.getElementById("column-2");
    var divMain = document.getElementById("main-container");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var notifications = document.getElementById("notification-allrequest");
    var footer = document.getElementById("footer");
    //Stylisation des éléments de la page
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (divMain) divMain.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (notifications) notifications.style.fontSize = "14px";
    if (footer) footer.style.display = "none";
  }
  function modifySignInPage() {
    //Sélection des éléments de la page
    var column0 = document.getElementById("column-0");
    var column1 = document.getElementById("column-1");
    var column2 = document.getElementById("column-2");
    var divMain = document.getElementById("main-container");
    var subMenu = document.getElementById("sub-menu-lign");
    var mainMenu = document.getElementById("main-menu-lign");
    var footer = document.getElementById("footer");

    //Stylisation des éléments de la page
    if (column0) column0.style.display = "none";
    if (column2) column2.style.display = "none";
    if (column1) column1.style.width = "100%";
    if (divMain) divMain.style.width = "100%";
    if (subMenu) subMenu.style.fontSize = "14px";
    if (mainMenu) mainMenu.style.display = "none";
    if (footer) footer.style.display = "none";
  }
  //Exécution des fonctions
  if (isHomePage) {
    modifyHomePage();
  } else if (currentURL.includes("groupnews_article")) {
    modifyArticlePage();
  } else if (currentURL.includes("blog_article")) {
    modifyArticlePage();
  } else if (currentURL.includes("videofr")) {
    modifyArticlePage();
  } else if (currentURL.includes("group_article")) {
    modifyArticlePage();
  } else if (currentURL.includes("search")) {
    modifyArticlePage();
  } else if (currentURL.includes("element")) {
    modifyArticlePage();
  } else if (currentURL.includes("newsfr")) {
    modifyArticlePage();
  } else if (currentURL.includes("my_messages")) {
    modifyMessagePage();
  } else if (currentURL.includes("new_message")) {
    modifyNewMessagePage();
  } else if (currentURL.match(/member\d+\.html$/)) {
    modifyProfilPage();
  } else if (currentURL.match(/blog\d+\.html$/)) {
    modifyBlogPage();
  } else if (currentURL.includes("blog_add_type")) {
    modifyCreateArticlePage();
  } else if (currentURL.includes("blog_add.html")) {
    modifyCreateBlogPage();
  } else if (currentURL.includes("sign_in.html")) {
    modifySignInPage();
  } else if (currentURL.includes("member_top.html")) {
    modifyTopPage();
  }
})();
