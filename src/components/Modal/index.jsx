const Modal = () => {
  return (
    <div
      className="modal fade"
      id="plan-modal"
      tabIndex="-1"
      aria-labelledby="plan-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button
              className="modal__close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
              </svg>
            </button>

            <form action="#" className="modal__form">
              <h4 className="modal__title">Select plan</h4>

              <div className="sign__group">
                <label htmlFor="fullname" className="sign__label">
                  Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  name="name"
                  className="sign__input"
                  placeholder="Full name"
                />
              </div>

              <div className="sign__group">
                <label htmlFor="email" className="sign__label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="sign__input"
                  placeholder="example@domain.com"
                />
              </div>

              <div className="sign__group">
                <label className="sign__label" htmlFor="value">
                  Choose plan:
                </label>
                <select className="sign__select" name="value" id="value">
                  <option value="20">Premium - $19.99</option>
                  <option value="40">Cinematic - $39.99</option>
                </select>

                <span className="sign__text">
                  You can spend money from your account on the renewal of the
                  connected packages, or to order cars on our website.
                </span>
              </div>

              <div className="sign__group">
                <label className="sign__label">Payment method:</label>

                <ul className="sign__radio">
                  <li>
                    <input id="type1" type="radio" name="type" checked="" />
                    <label htmlFor="type1">Visa</label>
                  </li>
                  <li>
                    <input id="type2" type="radio" name="type" />
                    <label htmlFor="type2">Mastercard</label>
                  </li>
                  <li>
                    <input id="type3" type="radio" name="type" />
                    <label htmlFor="type3">Paypal</label>
                  </li>
                </ul>
              </div>

              <button type="button" className="sign__btn sign__btn--modal">
                <span>Proceed</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
