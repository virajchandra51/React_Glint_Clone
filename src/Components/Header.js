import React, { useState, useEffect } from "react";
import "./Header.css";
function Header() {
  function openMenu(e) {
    e.preventDefault();
    document.body.classList.toggle("open-menu");
  }
  const menu = ["Home", "About", "Services", "Works", "Clients", "Contact"];
  const listItems = menu.map((item, index) => (
    <li key={index}>
      <a
        href={"#" + item.toLowerCase()}
        title={item.toLowerCase()}
        className="smoothscroll"
      >
        {item}
      </a>
    </li>
  ));
  return (
    <header className="Header">
      <div className="logo">
        <a href="../index.html">
          <img
            src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
            alt="homepage"
          />
        </a>
      </div>
      <nav className="header-nav">
        <a href="" className="nav-close" onClick={openMenu} title="close">
          <span>"Close"</span>
        </a>
        <div className="nav-content">
          <h3>Navigation</h3>
          <ul className="nav-list">{listItems}</ul>
          <p>
            Perscpiciatis hic praesentium nesciunt. Et neque a dolrum{" "}
            <a href="#0">voluptatem </a>porro iusto sequi veritatis libero enim.
            Iusto id suscipit veritatis neque reprehenderit"
          </p>
          <ul className="nav-social">
            <li>
              {" "}
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <a href="#0" className="toggle-menu" onClick={openMenu}>
        <span className="menu-text">Menu</span>
        <span className="menu-icon"></span>
      </a>
    </header>
  );
}

export default Header;
