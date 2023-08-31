import { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import "../../assets/Style/BackgroundStyle.css";
import {
  addWebsocketEventListener,
  socketConnection,
} from "../../socket-connection";
import { useParams } from "react-router";
import supabase from "../../../config/supabase-client";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Wwcd = () => {
  const {deadname}=useContext(AuthContext)
  const {id} = useParams()
  const [state, setState] = useState({});
  const [kills, setKills] = useState(0);
  const [data, setData] = useState([])
  const [dead, setDead] = useState([])
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [datevalue,setDatevalue]=useState({})
console.log(dead,"dead")
  useEffect(() => {
    async function main() {
      const { data } = await supabase
        .from('teams')
        .select()
        .eq('matchId', id)
      setData(data?.at(0))
    }
    

    main()
  }, [])
  

  useEffect(() => {
    const arr = []

    data?.teams?.teams?.forEach(i => {
      // console.log(i.points,"data")
      let count = 0
      
      i?.players.forEach(j => j.dead && count++)
      i.kills=i.points

      // i?.players?.forEach(j=>killsCount+=Number(j?.kills?.[id])||0)
      arr.push({teamId: i?._id, dead: count,teamName:i?.name,temeLogo:i?.logo, tolal:i?.kills})
    })
    setDead(arr)
  }, [data])

  supabase.channel('teams').on('postgres_changes', {
    event: '*',
    schema: 'public'
  },
    res => res.new?.matchId === id && setData(res.new)
  ).subscribe()

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
  
    socketConnection.on("UPDATE_KILLS", (data) => {
      console.log(data, "kills teams");
    });
  }, []);

  // data received from the web socket can be used here..
 
  const onPayloadReceivedAsync = async (payload) => {
    const { flag, playerName } = payload;
    toast.error(`${playerName} is dead `);
    
    // array.push(payload);

    // if (flag === "SEND_KILLS") {
    // } else if (flag === "SEND_PLAYER_DEAD") {
    // } else if (flag === "SEND_RANK") {
    // }

    // updateState(payload);
  };
 
  // console.log(array,"array");

  useEffect(() => {
    addWebsocketEventListener(onPayloadReceivedAsync);
  }, []);


  useEffect(() => {
    if (dead.count === 4) {
      setShowBackdrop(true);
      console.log("work")

      const timeout = setTimeout(() => {
        setShowBackdrop(false);
      }, 3000); // 3 seconds

      // Clear the timeout if the component unmounts or dead value changes
      return () => clearTimeout(timeout);
    }
  }, [dead]);

  

  return (
    <DefaultLayout>
      
      {/* background section  */}
      <section className=" h-[90vh] w-full bg-orange-100">
        {/* Inner  section  */}
        <div className=" h-full grid grid-cols-12 items-center w-full  ">
          {/* Left side live section start  */}
          <section className="col-span-10 flex justify-center items-end bg-orange-100 h-full ">
           {showBackdrop&& <div className=" h-36 w-80 p-4 gap-x-3 bg-orange-400 flex  items-center">
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
            </div>}
          </section>
          {/* Left side live section start  */}

          {/* Right side alive status section start here  */}
          <div className="h-[50vh]  bg-deep-rose col-span-2 mr-6 rounded-xl">
            <h1 className="text-2xl  font-bold text-white text-center py-3 ">
              {" "}
              Alive status{" "}
            </h1>
            <div className="h-[60vh] w-72  bg-rose rounded-xl p-4  mr-6 float-right ">
              <div className="bg-yellow  w-full bg-white flex justify-between py-1  px-2 border font-semibold">
                <h1> logo</h1>
                <h1>team </h1>
                <h1> Status </h1>
                <h1> Finish </h1>
              </div>
              <ul className="  ">
                {
                  dead?.map(deadData=>{
                    return  <li className={`text-start px-2 w-full h-8 bg-thin-rose mt-1 border border-yellow-300 text-white font-bold flex justify-between items-center gap-4 relative`}>
                      <span className={` ${deadData.dead===4 && 'absolute z-50 w-full left-0 top-0 h-full backdrop-blur-sm   backdrop-opacity-90'}`}></span>
                     <div  className="flex items-center justify-between w-full">
                     <div className="avatar">
    <div className="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
                      
                 {deadData?.teamName  || "NO Name"}
                    {deadData.dead === 0 ? (
                      <div className="flex gap-1 items-center">
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                      </div>
                    ) : deadData.dead === 1 ? (
                      <div className="flex items-center gap-1">
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                      </div>
                    ) : deadData.dead === 2 ? (
                      <div className="flex items-center gap-1">
                        <div className="h-3 rounded-md w-2 bg-white"></div>
                        <div className="h-3 rounded-md w-2 bg-white"></div>     <div className="h-3 rounded-md w-2 bg-orange-500"></div>     
                        
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                      </div>
                    ) : deadData.dead === 3 ? (
                       <div className="flex items-center gap-1">
                        <div className="h-3 rounded-md w-2 bg-white"></div>     <div className="h-3 rounded-md w-2 bg-orange-500"></div>

                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                      </div>
                    ) : (
                       <div className="flex gap-1 items-center">
                       <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                        <div className="h-3 rounded-md w-2 bg-orange-500"></div>
                   </div>
                    )}
                  <p>{deadData.dead}</p>

                     </div>
                  </li>
                  })
                }
            
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
