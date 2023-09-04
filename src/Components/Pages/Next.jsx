import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider';
import DisplayLayout from '../../Layout/DisplayLayout';
import '../../assets/Style/BackgroundStyle.css';
import '../../assets/Style/style.css';
import bg from '../../assets/images/images/bg.png';
import miramar from "../../assets/images/images/miramar.jpg";
import shanok from "../../assets/images/images/shanak.jpg";
import vikendi from "../../assets/images/images/vikendi.jpg";

const Next = () => {
  const {selectedMatchId} = useContext(AuthContext)
  
  const [nextMatch,setNextMatch]= useState({})

console.log(nextMatch)
  useEffect(() => {
    fetch(`http://localhost:8000/matches/next?match-id=${selectedMatchId}`)
    .then(res => res.json())
    .then ( result  => {
      setNextMatch(result)
    })
  },[selectedMatchId])

import DisplayLayout from '../../Layout/DisplayLayout';
import { AuthContext } from '../../Context/AuthProvider';
import bg from '../../assets/images/images/bg.png';
import { useSearchParams } from 'react-router-dom';

const Next = () => {
  const { selectedMatchId, setSelectedTournamentid, setSelectedStageId, setSelectedMatchId } = useContext(AuthContext);
  const [nextMatch, setNextMatch] = useState(null);
  const [searchParams] = useSearchParams();
console.log(selectedMatchId,"metch is")
  useEffect(() => {
    const tournamentId = searchParams.get('tournamentId');
    const stageId = searchParams.get('stageId');
    const matchId = searchParams.get('matchId');

    setSelectedTournamentid(tournamentId);
    setSelectedStageId(stageId);
    setSelectedMatchId(matchId);

  


    return (
      <DisplayLayout>
        <div className='h-[90vh] bg-linear-rose'  >
           <h1 className='font-bold  text-2xl text-yellow-400 pt-4'> Next Match  </h1>
           <div style={{ position:"relative"}}
           className='mx-auto ' >
         
        <div className='bg-rose'
            style={{height:"300px",width:"350px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",}}>
           <div className='py-4 flex flex-col bg-thin-rose text-3xl font-semibold text-center text-slate-100'>
            <h1 className=''> Match No:  {nextMatch.matchNo} </h1>
            <h1 className='text-yellow-500'> Time: {nextMatch.time}  </h1>

           </div>
            <div>
            <img 
           style={{position:"absolute",zIndex:1}}
            className='w-full h-full '
            src={
              nextMatch?.chooseMap?.toLowerCase() === "shenok"
                ? shanok
                : nextMatch?.chooseMap?.toLowerCase() === "erangel"
                ? bg
                : nextMatch?.chooseMap?.toLowerCase() === "miramar"
                ?
                miramar
                : nextMatch?.chooseMap?.toLowerCase() === "vikendi"
                ?
                vikendi
                : bg
            }
            alt="" />

    // set on localstorage
    localStorage.setItem('tournamentId', tournamentId);
    localStorage.setItem('stageId', stageId);
    localStorage.setItem('matchId', matchId);
    if (selectedMatchId) {
      fetch(`http://localhost:8000/matches/next?match-id=${selectedMatchId}`)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setNextMatch(result); // Update the state with the fetched next match data
        })
        .catch(error => {
          console.error('Error fetching next match:', error);
        });
    }
  }, [selectedMatchId]);

  return (
    <DisplayLayout>
      <div className='h-[90vh] bg-linear-rose'>
        <h1 className='font-bold text-2xl text-yellow-400 pt-4'> Next Match </h1>
        {nextMatch && (
          <div style={{ position: 'relative' }} className='mx-auto'>
            <div
              className='bg-rose'
              style={{
                height: '300px',
                width: '350px',
                clipPath: 'polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)',
              }}
            >
              <div className='py-4 flex flex-col bg-thin-rose text-3xl font-semibold text-center text-slate-100'>
                <h1>Match No: {nextMatch.matchNo}</h1>
                <h1 className='text-yellow-500'>Time: {nextMatch.time}</h1>
              </div>
              <div>
                <img
                  style={{ position: 'absolute', zIndex: 1 }}
                  className='w-full h-full'
                  src={bg}
                  alt=''
                />
              </div>

            </div>
            <div
              className='bg-thin-rose'
              style={{
                height: '67px',
                width: '350px',
                fontFamily: 'teko',
                zIndex: 10,
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)',
              }}
            >
              <h2 style={{ fontFamily: 'teko', fontSize: '42px', fontWeight: '600' }}>
                {nextMatch.chooseMap}
              </h2>
            </div>
          </div>
        )}
      </div>
    </DisplayLayout>
  );
};

export default Next;
