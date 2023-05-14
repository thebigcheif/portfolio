import Modal from "react-modal";
import UseData from "../../Hooks/UseData";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";

Modal.setAppElement("#root");

const Blog = () => {
  const { handleBlogsData } = UseData();
  const handleModle = (id) => {
    handleBlogsData(id);
  };

  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const postsUrl =
    process.env.REACT_APP_WORDPRESS_BASE_URL + "wp-json/wp/v2/posts";
  const imagesUrl =
    process.env.REACT_APP_WORDPRESS_BASE_URL + "wp-json/wp/v2/media";

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
    fetch(imagesUrl)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, [postsUrl, imagesUrl]);

  const featuredMedia = posts.map((data) => data.featured_media);

  const image = images.map((data) => {
    return {
      imagesUrls: process.env.REACT_APP_WORDPRESS_BASE_URL + data.guid.rendered,
      id: data.id,
    };
  });

  const updated_images = image.filter((data) =>
    featuredMedia.includes(data.id)
  );

  let counter = 0;

  if (posts.length === 0) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="row">
          {posts.map((item) => (
            <a
              href={item?.link}
              key={item.id}
              className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
            >
              <article
                className="post-container"
                onClick={() => handleModle(item?.title)}
              >
                <div className="post-thumb">
                  <div className="d-block position-relative overflow-hidden">
                    <img
                      src={updated_images[counter++]?.imagesUrls}
                      className="img-fluid"
                      alt="item.title"
                    />
                  </div>
                </div>
                {/* End .thumb */}
                <div className="post-content">
                  <div className="entry-header">
                    <h3>{item?.title.rendered}</h3>
                  </div>
                  <div className="entry-content open-sans-font">
                    <p>
                      {item?.content.rendered.replace("<p>", "").slice(0, 100)}
                    </p>
                  </div>
                </div>
                {/* End .post-content */}
              </article>

              {/* End  ModalOneBlogContent */}
            </a>
          ))}
        </div>
      </>
    );
  }
  // setPosts({ ...setPosts, images: image });
};

export default Blog;
