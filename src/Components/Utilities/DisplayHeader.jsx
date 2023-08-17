import React, { useContext } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import '../../assets/Style/style.css'
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { sendPayload } from '../../socket-connection';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const DisplayHeader = () => {
  const {
    setSelectedTournamentid,
    setSelectedStageId,
    setSelectedMatchId,
    selectedStageId,
    selectedMatchId,
    setSelectedMatchData,
    user,
  } = useContext(AuthContext);
  const [tournamentId, setTournamentId] =useState()
  const [stageData, setStageData] = useState([]);
  const [stageId, setStageId] = useState(null)
  const [matches, setMatches] = useState([]);
  const [matchId, setMatchId] = useState(null);
  const [matchData, setMatchData] = useState([])
  const navigate = useNavigate()

  const isLoggedIn = !!user;



  const { data: tournaments, error, isLoading, refetch } = useQuery('tournaments', fetchTournament); //  tournament data 

  // fetch  Tournament data 
  async function fetchTournament() {
    const response = await fetch(`http://localhost:8000/tournaments`);
    if (!response.ok) {
      throw new Error('Failed to fetch  tournament Data')
    }
    return response.json();
  }

  // get groupStage by tournamentid  
  useEffect(() => {
    if (tournamentId) {
      fetch(`http://localhost:8000/stages?tournament-id=${tournamentId}`)
        .then(res => res.json())
        .then(data => {
          setStageData(data)
        })
    }
  }, [tournamentId])

  // get match by stageid  
  useEffect(() => {
    if (stageId) {
      fetch(`http://localhost:8000/matches?stage-id=${stageId}`)
        .then(res => res.json())
        .then(data => {
          setMatches(data)
          // console.log(data,'matches')

        })
    }
  }, [stageId])



  //  tournament  select handlar 
  useEffect(() => {
    const storedTournamentId = localStorage.getItem('tournamentID')
    if (storedTournamentId) {
      setTournamentId(storedTournamentId)
      setSelectedTournamentid(storedTournamentId)
    }
  }, [setSelectedTournamentid])

  const handleSelectTournament = (e) => {
    const selectedTournament = (e.target.value);
    setTournamentId(selectedTournament)
    setSelectedTournamentid(selectedTournament)
    navigate(`/${e.target.value}`)
    localStorage.setItem('tournamentID', selectedTournament)

  }


  // // Select  group handlar 
  useEffect(() => {
    const storedStageId = localStorage.getItem('stageID')
    if (storedStageId) {
      setStageId(storedStageId)
      setSelectedStageId(storedStageId)
    }
  }, [setSelectedStageId])
  const handleSelectStage = (e) => {
    const selectedGroupId = (e.target.value);
    setStageId(selectedGroupId)
    setSelectedStageId(selectedGroupId)
    localStorage.setItem('stageID', selectedGroupId)

  }

  // select match handlar 
  useEffect(() => {
    const storedMatchId = localStorage.getItem('matchID')
    if (storedMatchId) {
      setMatchId(storedMatchId)
      setSelectedMatchId(storedMatchId)
    }
  }, [setSelectedMatchId])
  const handleSelectMatch = (e) => {
    const selectedMatch = e.target.value;
    setMatchId(selectedMatch);
    setSelectedMatchId(selectedMatch)
    localStorage.setItem('matchID', selectedMatch)
  }


  // get match data by stage id 
  useEffect(() => {
    if (selectedStageId) {
      const FetchMatchById = async () => {
        try {
          const response = await fetch(`http://localhost:8000/matches?stage-id=${selectedStageId}`)
          const result = await response.json();
          setMatchData(result)
        } catch (error) {
          console.log(error)
        }
      }
      FetchMatchById()
    }
  }, [selectedStageId])

  function getMatchData(matchData, selectedMatchId) {
    return matchData?.find((item) => item?._id === selectedMatchId)
  }
  setSelectedMatchData(getMatchData(matchData, selectedMatchId))


  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <div> Error: {error.message} </div>
  }

  const onNavigate = event => {
    if (typeof event.target?.href !== "string") { return; }

    // const url = event.target.href;
    const url = `${event.target.href}?tournamentId=${tournamentId}&stageId=${stageId}&matchId=${matchId}`

    // if (!isLoggedIn) { return; }

    sendPayload({
      flag: "URL_CHANGE",
      url: url,
      isLoggedIn: isLoggedIn,
    });
  };
  // http://localhost:2000/overall-topfragger?tournamentId=adfasdfasdf&stageId=asdfasdfa&matchId=adfasdf

  const copyLinkHanlder = () => {
    const sharableLink = `${baseUrl}${location.pathname}?tournamentId=${tournamentId}&stageId=${stageId}&matchId=${matchId}`;
    navigator.clipboard.writeText(sharableLink);

    toast.success("Link has been copied!")

  }

  return (
    <div className='mt-5 '>
      {/* dropdown section  */}
      {isLoggedIn && <section className='flex w-full h-auto justify-between lg:flex-row lg:gap-y-0 gap-y-4 flex-col px-6'>
        <div className=''>
          <label className='lg:text-2xl  lg:font-semibold font-bold'>  Select Tournament: </label>
          <select className='lg:text-xl text-lg border hover:cursor-pointer' value={tournamentId} onChange={handleSelectTournament}>
            <option disabled selected> Select Tournament </option>
            {tournaments?.map((tournament) => <option key={tournament._id} value={tournament?._id} >
              {/* <Link to={`/${tournament?._id}`} className='cursor-pointer'> {tournament.name} </Link> */}
              {tournament?.name}
            </option>)}
          </select>
          <button onClick={copyLinkHanlder}>Copy Link</button>
        </div>

        <div>
          <label className='lg:text-2xl lg:font-semibold font-bold'>  Select Group  </label>
          <select className='lg:text-xl text-lg border hover:cursor-pointer' value={stageId} onChange={handleSelectStage} >
            <option disabled selected> Select Group </option>
            {stageData?.map((stage) => <option key={stage?._id} value={stage?._id} > {stage?.name} </option>)}
          </select>
        </div>

        <div>
          <label className='lg:text-2xl  lg:font-semibold font-bold'>  Select Match  </label>
          <select className='lg:text-xl  text-lg border hover:cursor-pointer' value={matchId} onChange={handleSelectMatch} defaultValue={null}>
            <option disabled selected> Select Match  </option>
            {matches?.map((match) => <option key={match?._id} value={match?._id} >
              M.No {match?.matchNo}
            </option>)}
          </select>
        </div>
      </section>}


      {isLoggedIn && <div className="flex  lg:text-xl text-lg px-1 mt-4 justify-center flex-wrap">
        <Link onClick={onNavigate}to={`/${tournamentId}/standing`} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  STANDING</Link>
        <NavLink onClick={onNavigate}to={`/${tournamentId}/topfragger`} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  Top Fragger</NavLink>
        <NavLink onClick={onNavigate}to={`/${tournamentId}/mvp`} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  MVP</NavLink>
        <NavLink onClick={onNavigate}to={'/schedul'} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  SCHEDULE </NavLink>
        <NavLink onClick={onNavigate}to={'/next'} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  Next </NavLink>
        <NavLink onClick={onNavigate}to={'/overall-topfragger'} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  OverAll Top Fragger </NavLink>
        <NavLink onClick={onNavigate}to={'/overall-mvp'} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm'>  OverAll MVP </NavLink>
        <NavLink onClick={onNavigate}to={'/overall-standing'} className='text-neutral-50   px-2 lg:py-1 bg-linear-rose rounded-sm '>  Overall Standing </NavLink>
      </div>}
    </div>
  );
};

export default DisplayHeader;