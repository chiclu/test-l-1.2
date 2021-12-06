// import Button from "../../components/button/Button";

const mainPage = (props) => {
  return (
    <section>
      <h1>
        Kandidat : {props.userName} {props.userLastName}
      </h1>
      <div>
        {/* <Button/> */}
        <div>
          <button>Stop</button>
        </div>
      </div>
    </section>
  );
};

export default mainPage;
