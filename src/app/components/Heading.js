import Link from "next/link";

function Heading(props) {
  return (
    <>
      <div className="row mb-5">
        <div className="col-12 ">
          <div className="deals-heading">
            <h4>{props.title}</h4>
            <Link href={props.link}>View All</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
