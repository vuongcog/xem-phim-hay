import { Link } from "react-router-dom";

const PageTitle = () => {
  return (
    <section
      className="section section--first section--bg"
      data-bg="img/bg/section__bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__wrap">
              <h1 className="section__title section__title--head">
                Catalog Grid
              </h1>

              <ul className="breadcrumbs">
                <li className="breadcrumbs__item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="breadcrumbs__item breadcrumbs__item--active">
                  Catalog grid
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageTitle;
