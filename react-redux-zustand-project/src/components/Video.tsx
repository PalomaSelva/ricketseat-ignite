import ReactPlayer from 'react-player'

export function VideoPlayer() {
  return (
    <div className="w-full bg-zing-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://youtu.be/79PFOHmvGk4?si=WI0ix3B4lYhOLrT3"
      />
    </div>
  )
}
