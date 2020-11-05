import React from 'react'
import PlayBtn from "../images/player/play.svg"
import PauseBtn from "../images/player/pause.svg";

class Player extends React.Component {
  state = {
    index: 3,
    currentTime: '0:00',
    musicList: [{number:'№1 ', name:'Nice piano and ukulele -', author: 'Royalty ', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3 ', duration: '2:02'},
                {number:'№2 ',name:'Gentle acoustic - ', author: 'Acoustic', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
                {number:'№3 ',name:'Corporate motivational -', author: 'Corporate', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
                {number:'№4 ',name:'Slow cinematic -', author: 'Royalty', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'}],
    pause: false,
  };


  componentDidMount() {
    this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
    this.playerRef.addEventListener("ended", this.nextSong, false);
    this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
    this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
    this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
  }

  componentWillUnmount() {
    this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
    this.playerRef.removeEventListener("ended", this.nextSong);
    this.timelineRef.removeEventListener("click", this.changeCurrentTime);
    this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
    this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
  }

  changeCurrentTime = (e) => {
    const duration = this.playerRef.duration;

    const playheadWidth = this.timelineRef.offsetWidth;
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;

    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

    this.playheadRef.style.width = userClickWidhtInPercent + "%";
    this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
  }

  hoverTimeLine = (e) => {
    const duration = this.playerRef.duration;

    const playheadWidth = this.timelineRef.offsetWidth

    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

    if(userClickWidhtInPercent <= 100){
      this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
    }

    const time = (duration * userClickWidhtInPercent)/100;

    if( (time >=0) && (time <= duration)){
      this.hoverPlayheadRef.dataset.content = this.formatTime(time);
    }
  }

  resetTimeLine = () => {
    this.hoverPlayheadRef.style.width = 0;
  }

  timeUpdate = () => {
    const duration = this.playerRef.duration;
    const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
    const playPercent = 100 * (this.playerRef.currentTime / duration);
    this.playheadRef.style.width = playPercent + "%";
    const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
    this.setState({
      currentTime
    });
  }

  formatTime = (currentTime) =>{
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;

    const formatTime = minutes + ":" +  seconds

    return formatTime;
  }

  updatePlayer = () =>{
    const { musicList, index } = this.state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    this.playerRef.load();
  }

  nextSong = () => {
    const { musicList, index, pause } = this.state;

    this.setState({
      index: (index + 1) % musicList.length
    });
    this.updatePlayer();
    if(pause){
      this.playerRef.play();
    }
  };

  prevSong = () => {
    const { musicList, index, pause } = this.state;

    this.setState({
      index: (index + musicList.length - 1) % musicList.length
    });
    this.updatePlayer();
    if(pause){
      this.playerRef.play();
    }
  };


  playOrPause = () =>{
    const { musicList, index, pause } = this.state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    if( !this.state.pause ){
      this.playerRef.play();
    }else{
      this.playerRef.pause();
    }
    this.setState({
      pause: !pause
    })
  }

  clickAudio = (key) =>{
    const { pause } = this.state;

    this.setState({
      index: key
    });

    this.updatePlayer();
    if(pause){
      this.playerRef.play();
    }
  }


  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return (
      <div className="player">
        <div className="player__current-song">
          <audio ref={ref => this.playerRef = ref}>
            <source src={ currentSong.audio } type="audio/ogg"/>
            Your browser does not support the audio element.
          </audio>
          <span className="player__song_number">{ currentSong.number }</span>
          <span className="player__song_name">{ currentSong.name }</span>
          <span className="player__song_author">{ currentSong.author }</span>

          <div className="player__time">
            <div className="player__current-time">{ currentTime }</div>
          </div>

          <div ref={ref => this.timelineRef = ref} id="timeline" className="player__timeline">
            <div ref={ref => this.playheadRef = ref} id="playhead" className="player__playhead"/>
            <div ref={ref => this.hoverPlayheadRef = ref} class="player__playhead-hover" data-content="0:00"/>
          </div>

          <div className="player__controls">
            <button onClick={this.playOrPause} className="player__btn">
              {
                (!pause) ? <img className="player__btn-play" src={PlayBtn} alt="play button"/>
                  :<img class="player__btn-pause" src={PauseBtn} alt="pause button"/>
              }
            </button>
          </div>

        </div>

        <button className="switch" >Текст песни</button>
        <button className="more" />

        <div className="playlist" >
          {musicList.map( (music, key=0) =>
            <div key={key}
                 onClick={()=>this.clickAudio(key)}
                 className={"track " +
                 (index === key && !pause ?'current-audio':'') +
                 (index === key && pause ?'play-now':'')} >

              <div className="playlist__info" >
                <span className="playlist__info_number" >{music.number}</span>
                <span className="playlist__info_name" >{music.name}</span>
                <span className="playlist__info_author" >{music.author}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Player
