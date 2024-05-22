import React, { useState, useRef, useEffect } from 'react';
import { generateRandomNumber } from './random';
import './RockPaperScissors.css';

function requestFullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }
}

const RockPaperScissors = () => {
    const [playerMoves, setPlayerMoves] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [outcome, setOutcome] = useState('');
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

  const determineOutcome = (playerMove, computerMove) => {
    let roundOutcome = '';
    if (playerMove === 'Rock') {
      if (computerMove === 'Scissors') {
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Paper') {
        setComputerScore(computerScore + 1);
      } else {
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Scissors') {
        setComputerScore(computerScore + 1);
      } else {
      }
    } else if (playerMove === 'Scissors') {
      if (computerMove === 'Paper') {
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Rock') {
        setComputerScore(computerScore + 1);
      } else {
      }
    }
    setOutcome(roundOutcome);
  };

  const handlePlayerMove = async (move) => {
    if (isVideoPlaying) {
      return;
    }
  
    const random_number = generateRandomNumber(1, 3);
    let computerMove = '';
    if (random_number === 1) {
      computerMove = 'Rock';
    } else if (random_number === 2) {
      computerMove = 'Paper';
    } else if (random_number === 3) {
      computerMove = 'Scissors';
    }
    setPlayerMoves([...playerMoves, move]);
    determineOutcome(move, computerMove);
  
    if (move === 'Rock' && computerMove === 'Scissors') {
      console.log('Fetching video for Rock vs Scissors...');
      try {
        const response = await fetch('http://127.0.0.1:5000/get_video/rock_scissors.mp4');
        if (response.ok) {
          const videoBlob = await response.blob();
          const videoUrl = URL.createObjectURL(videoBlob);
          videoRef.current.src = videoUrl;
          videoRef.current.style.display = 'block';
          videoRef.current.play();
          videoRef.current.controls = false;
          requestFullScreen(videoRef.current);
        } else {
          console.error('Failed to fetch video:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    }

    if (move === 'Scissors' && computerMove === 'Paper') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/scissors_cut_paper.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }

      if (move === 'Paper' && computerMove === 'Rock') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/paper_covers_rock.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }

      if (move === 'Rock' && computerMove === 'Paper') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/paper_covers_rock.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
    } else {
        videoRef.current.style.transform = 'none';
      }

      if (move === 'Paper' && computerMove === 'Scissors') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/scissors_cut_paper.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
    } else {
        videoRef.current.style.transform = 'none';
      }

      if (move === 'Scissors' && computerMove === 'Rock') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/rock_scissors.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
    } else {
        videoRef.current.style.transform = 'none';
      }

      if (move === 'Scissors' && computerMove === 'Scissors') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/scissors_tie.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }

      if (move === 'Rock' && computerMove === 'Rock') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/rock_tie.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }

      if (move === 'Paper' && computerMove === 'Paper') {
        try {
          const response = await fetch('http://127.0.0.1:5000/get_video/paper_tie.mp4');
          if (response.ok) {
            const videoBlob = await response.blob();
            const videoUrl = URL.createObjectURL(videoBlob);
            videoRef.current.src = videoUrl;
            videoRef.current.style.display = 'block';
            videoRef.current.play();
            videoRef.current.controls = false;
            requestFullScreen(videoRef.current);
          } else {
            console.error('Failed to fetch video:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }
  };

    useEffect(() => {
        const videoElement = videoRef.current;
        const handleVideoPlay = () => {
          setIsVideoPlaying(true);
        };
        const handleVideoPause = () => {
          setIsVideoPlaying(false);
        };
        videoElement.addEventListener('play', handleVideoPlay);
        videoElement.addEventListener('pause', handleVideoPause);
        return () => {
          videoElement.removeEventListener('play', handleVideoPlay);
          videoElement.removeEventListener('pause', handleVideoPause);
        };
      }, []);

  return (
    <div>
      {!isVideoPlaying && (
        <div className='RPS_header'>
          <p className='Player_score'>Player Score: {playerScore}</p>
          <button onClick={() => handlePlayerMove('Rock')} className='rock_button'>Rock</button>
          <button onClick={() => handlePlayerMove('Paper')} className='paper_button'>Paper</button>
          <button onClick={() => handlePlayerMove('Scissors')} className='scissors_button'>Scissors</button>
          <p className='Computer_score'>Computer Score: {computerScore}</p>
        </div>
      )}
      <div>
        <p>{outcome}</p>
      </div>
      <div>
        <video ref={videoRef} controls style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default RockPaperScissors;