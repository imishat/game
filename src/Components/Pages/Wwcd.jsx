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
import WwcdTeams from "./wwcdTeams";
import { object } from "prop-types";

const Wwcd = () => {
 
  const {id} = useParams()
  const [state, setState] = useState({});
  const [kills, setKills] = useState(0);
  const [data, setData] = useState([])
  const [dead, setDead] = useState([])
 
  console.log(dead)

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
    
     
      arr.push({teamId: i?._id, dead: count,teamName:i?.name,temeLogo:i?.logo,kills:data.totalNumber[i._id]})
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
    // toast.error(`${playerName} is dead `);
    
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


  

  

  return (
    <DefaultLayout>
      
      {/* background section  */}
      <section className=" h-[90vh] w-full bg-orange-100">
        {/* Inner  section  */}
        <div className=" h-full grid grid-cols-12 items-center w-full  ">
          {/* Left side live section start  */}
          <section className="col-span-10 flex justify-center items-end bg-orange-100 h-full ">
           
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
                  dead?.map((deadData,i)=>{
                    return <WwcdTeams deadData={deadData} key={i}></WwcdTeams>
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
