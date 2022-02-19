import { toast } from "react-toastify";

const toaster = (type, message) => {
  if (message) {
    if (type == "success")
      toast.success(
        <div className="fanjolt-toaster-modal">
          <div>
            <span>
              <i>
                <img src="/images/svg/like.svg" alt="" />
              </i>
              SUCCESS
            </span>
          </div>
          <div className="fanjolt-toaster-details">
            {/*<h5>Successful!</h5>*/}
            <p>{message}</p>
          </div>
        </div>
      );
    else if (type == "error")
      toast.error(
        <div className="fanjolt-toaster-modal fanjolt-toaster-modal-error">
          <div>
            <span>
              <i>
                <img src="/images/svg/cancel-icon.svg" alt="" />
              </i>
              ERROR
            </span>
          </div>
          <div className="fanjolt-toaster-details">
            {/*<h5>Error!</h5>*/}
            <p>{message}</p>
          </div>
        </div>
      );
  }
};
export default toaster;
