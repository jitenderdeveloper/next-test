"use client";

function Button({ coupon_input, client }) {
  const copyCouponHandler = (link, client) => {
    navigator.clipboard.writeText(`${link}`);
    alert("COUPON IS COPY 👍");
    const client_link = client?.link;
    setTimeout(() => {
      window.open(client_link);
    }, 1000);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => copyCouponHandler(coupon_input, client)}
      >
        COPY NOW
      </button>
    </>
  );
}

export default Button;
