import React from 'react';
import styles from '../../MakeShortLink/MakeShortLink.module.css';

function CopyButton({ isCopied, onClick, doneTextMessage }) {
  return (
    <button type="button" className={styles.copyButton} onClick={onClick}>
      {isCopied ? (
        <>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="#231F20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 1.83337C9.18699 1.83337 7.41471 2.37099 5.90726 3.37824C4.39981 4.38548 3.22489 5.81712 2.53109 7.49211C1.83728 9.1671 1.65575 11.0102 2.00945 12.7884C2.36315 14.5665 3.23619 16.1999 4.51817 17.4819C5.80015 18.7638 7.4335 19.6369 9.21166 19.9906C10.9898 20.3443 12.8329 20.1627 14.5079 19.4689C16.1829 18.7751 17.6145 17.6002 18.6218 16.0928C19.629 14.5853 20.1666 12.813 20.1666 11C20.1666 9.79626 19.9295 8.60426 19.4689 7.49211C19.0082 6.37996 18.333 5.36943 17.4818 4.51823C16.6306 3.66703 15.6201 2.99181 14.5079 2.53115C13.3958 2.07048 12.2038 1.83337 11 1.83337V1.83337ZM14.9416 8.80921L10.7525 14.3092C10.6671 14.4201 10.5574 14.51 10.4319 14.572C10.3064 14.634 10.1683 14.6664 10.0283 14.6667C9.88908 14.6675 9.75151 14.6365 9.62603 14.5761C9.50055 14.5158 9.39048 14.4276 9.30415 14.3184L7.06748 11.4675C6.91797 11.2755 6.85087 11.0319 6.88096 10.7904C6.91104 10.5488 7.03584 10.3291 7.2279 10.1796C7.41996 10.0301 7.66355 9.96301 7.90508 9.9931C8.14661 10.0232 8.3663 10.148 8.51582 10.34L10.01 12.2467L13.475 7.66337C13.5484 7.56707 13.6401 7.48618 13.7448 7.4253C13.8495 7.36443 13.9651 7.32478 14.0852 7.30861C14.2052 7.29243 14.3272 7.30006 14.4443 7.33105C14.5614 7.36203 14.6712 7.41578 14.7675 7.48921C14.8638 7.56264 14.9447 7.65432 15.0056 7.75901C15.0664 7.86371 15.1061 7.97937 15.1223 8.09939C15.1384 8.21941 15.1308 8.34144 15.0998 8.45851C15.0688 8.57558 15.0151 8.68541 14.9416 8.78171V8.80921Z" />
          </svg>

          <span>{doneTextMessage}</span>
        </>
      ) : (
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66 6.88325L6.66667 0H13.34V19.2445H0V6.89013L6.66 6.88325ZM5.33067 5.48625V1.3475L1.328 5.48488H5.33067V5.48625ZM14.6693 2.75H16V22H2.66667V20.6236H14.6693V2.75Z"
          />
        </svg>
      )}
    </button>
  );
}

export default CopyButton;