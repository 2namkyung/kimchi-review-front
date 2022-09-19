import React, { useState } from "react";

import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

const dummyData = [
  {
    deadline: "December, 30, 2021",
    authorLink: "#",
    nftLink: "#",
    bidLink: "#",
    authorImg: "./img/author/author-1.jpg",
    previewImg: "./img/items/static-1.jpg",
    title: "Pinky Ocean",
    price: "0.08 ETH",
    bid: "1/20",
    likes: 50,
  },
  {
    deadline: "",
    authorLink: "#",
    nftLink: "#",
    bidLink: "#",
    authorImg: "./img/author/author-10.jpg",
    previewImg: "./img/items/static-2.jpg",
    title: "Deep Sea Phantasy",
    price: "0.06 ETH",
    bid: "1/22",
    likes: 80,
  },
  {
    deadline: "",
    authorLink: "#",
    nftLink: "#",
    bidLink: "#",
    authorImg: "./img/author/author-11.jpg",
    previewImg: "./img/items/static-3.jpg",
    title: "Rainbow Style",
    price: "0.05 ETH",
    bid: "1/11",
    likes: 97,
  },
];

const NftCard = () => {
  const [nfts, setNfts] = useState(dummyData);

  return (
    <div className="row">
      {nfts.map((nft, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        >
          <div className="nft__item">
            <div className="nft__item_wrap" style={{ height: `245px` }}>
              <Outer>
                <span>
                  <img
                    src={nft.previewImg}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </span>
              </Outer>
            </div>
            <div className="nft__item_info">
              <div className="spacer-10" />
              <span onClick={() => window.open(nft.nftLink, "_self")}>
                <h4>{nft.title}</h4>
              </span>
              <div className="nft__item_price">{nft.price}</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{nft.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftCard;
