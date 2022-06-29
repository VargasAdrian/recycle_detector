
import * as React from "react"
import Menu from "../components/menu";

export default () => {
    // const [takenPhoto, setTakenPhoto] = React.useState(false);
    // const [localStream, setStream] = React.useState<MediaStream | null>(null);

    const [cameraActive, setCameraActive] = React.useState(false);
    const [takenPhoto, setTakenPhoto] = React.useState(false);

    const launchCamera = () => {
        const facingMode = "user";
        const constraints = {
            audio: false,
            video: {
                facingMode
            }
        }

        navigator.mediaDevices.getUserMedia(constraints).then(
            (stream) => {
                setCameraActive(true);
                setTakenPhoto(false);

                setTimeout(() => {
                    var video = document.getElementById("player") as HTMLVideoElement;
                    video.srcObject = stream;
                }, 0);
            },
            (error) => {
                console.log(error);
                alert('No se ha dado el permiso');
            }
        );
    }

    const takePhoto = () => {
        var video = document.getElementById("player") as HTMLVideoElement;
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;

        let stream = video.srcObject as MediaStream;
        canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        stream.getTracks().forEach(t => t.stop());
        let image_data_url = canvas.toDataURL('image/jpeg');

        setCameraActive(false);
        setTakenPhoto(true);
    }
    return (
        <div className="page-camera">
            <Menu />

            <div className="page-padding">
                <div className="flex-container">
                    <div className="card">

                        <video className={cameraActive ? "" : "hidden"} id="player" playsInline autoPlay muted width={200} height={200}></video>
                        <canvas className={takenPhoto ? "" : "hidden"} id="canvas" width={200} height={200}></canvas>

                        {cameraActive ?
                            <button className="btn-primary" onClick={takePhoto}>Hacer foto</button>
                        :
                            (takenPhoto ?
                                <button className="btn-primary" onClick={launchCamera}>Rehacer foto</button>
                                :
                                <button className="btn-primary" onClick={launchCamera}>Empezar cámara</button>)
                        }
                    </div>
                    <div className="card">

                    </div>
                </div>
            </div>
        </div>
    )
}