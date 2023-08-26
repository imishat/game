import { useEffect, useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import "../../assets/Style/BackgroundStyle.css";
import {
  addWebsocketEventListener,
  socketConnection,
} from "../../socket-connection";

const Wwcd = () => {
  const [state, setState] = useState({});
  const [kills, setKills] = useState(0);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const updateState = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };

  useEffect(() => {
    console.log("use effect");
    socketConnection.on("UPDATE_KILLS", (data) => {
      console.log(data, "kills teams");
    });
  }, []);

  // data received from the web socket can be used here..
  const array = [];
  const onPayloadReceivedAsync = async (payload) => {
    // const { flag, } = payload;
    console.log(payload);
    array.push(payload);

    if (flag === "SEND_KILLS") {
    } else if (flag === "SEND_PLAYER_DEAD") {
    } else if (flag === "SEND_RANK") {
    }

    updateState(payload);
  };
  console.log(array, "arr");
  // console.log(array,"array");

  useEffect(() => {
    addWebsocketEventListener(onPayloadReceivedAsync);
  }, []);

  return (
    <DefaultLayout>
      <h1>{kills}</h1>
      {/* background section  */}
      <section className=" h-[90vh] w-full bg-orange-100">
        {/* Inner  section  */}
        <div className=" h-full grid grid-cols-12 items-center w-full  ">
          {/* Left side live section start  */}
          <section className="col-span-10 flex justify-center items-end bg-orange-100 h-full">
            <div className=" h-36 w-80 p-4 gap-x-3 bg-orange-400 flex  items-center">
              <img
                src="https://i.pinimg.com/originals/11/09/52/1109528a8206ea6b777b84bc5bdaaec6.jpg"
                className="w-24  h-28"
              />
              <div className="bg-orange-400 w-60 h-24 ">
                <h1 className="font-bold  text-xl bg-white p-2">
                  {" "}
                  Grand Final{" "}
                </h1>
                <h1 className="font-bold  text-xl mt-3 bg-white p-2">
                  {" "}
                  Match 3{" "}
                </h1>
              </div>
            </div>
          </section>
          {/* Left side live section start  */}

          {/* Right side alive status section start here  */}
          <div className="h-[50vh]  bg-deep-rose col-span-2 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-2xl  font-bold text-white text-center py-3 ">
              {" "}
              Alive status{" "}
            </h1>
            <div className="h-[60vh] w-48  bg-rose rounded-tl-xl rounded-bl-xl float-right ">
              <div className="bg-yellow  w-full bg-white flex justify-between py-1 border font-semibold">
                <h1> Team </h1>
                <h1> Status </h1>
                <h1> Finish </h1>
              </div>
              <ul className="  ">
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 1{" "}
                </li>
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 2{" "}
                </li>
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 3{" "}
                </li>
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 4{" "}
                </li>
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 5{" "}
                </li>
                <li className="text-start px-2 w-full  h-8 bg-thin-rose mt-1 border border-yellow-300 text-white  font-bold flex  justify-between items-center gap-4">
                  {" "}
                  Winners <div className="h-3 rounded-md w-2 bg-white">
                    {" "}
                  </div> 6{" "}
                </li>
              </ul>
              <div className="flex h-8 w-full  bg-slate-900  justify-around">
                <h1 className="text-white flex items-center gap-x-1 ">
                  {" "}
                  <div className="h-3 rounded-sm w-2 bg-white">
                    {" "}
                  </div> Alive{" "}
                </h1>

                <h1 className="texf text-white flex items-center gap-x-1">
                  {" "}
                  <div className="h-3 rounded-sm w-2 bg-orange-400"> </div>{" "}
                  Finish{" "}
                </h1>
              </div>
            </div>
          </div>
          {/* Right side alive status section end here  */}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Wwcd;
