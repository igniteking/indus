import React from "react";
interface Props {
  path: string;
  title: string;
  subtitle: string;
  date: string;
  Ytlink: string;
}

function Thumbnail(props: Props) {
  return (
    <div className="panel mt-30">
      <div className="item">
        <div className="img">
          <img src={props.path} alt="" />
        </div>
        <div className="cont d-flex align-items-end">
          <div>
            <span>{props.title}</span>
            <h5>{props.subtitle}</h5>
          </div>
          <div className="ml-auto">
            <h6>{props.date}</h6>
          </div>
        </div>
        <a href={props.Ytlink} target="_blank" className="link-overlay"></a>
      </div>
    </div>
  );
}

export default Thumbnail;
