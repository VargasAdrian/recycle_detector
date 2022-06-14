import React from "react";

export default () => {

    const launchCamera = () => {
        var video = document.getElementById("player");

        const facingMode = "user";
        const constraints = {
            audio: false,
            video: {
                facingMode
            }
        }

        navigator.mediaDevices.getUserMedia(constraints).then(
            (stream) => {
                video.srcObject = stream;
            },
            (error) => {
                console.log(error);
                alert('No se ha dado el permiso');
            }
        );
    }

    const takePhoto = () => {
        var video = document.getElementById("player");
        var canvas = document.getElementById("canvas");

        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas.toDataURL('image/jpeg');

        // data url of the image
        console.log(image_data_url);
    }

    return (
        <div>
            <h1>Use the camera to see where the trash goes</h1>

            <p>Lets start, click on the button to use the camera</p>
            <button onClick={launchCamera}>Camera</button>

            <video id="player" playsInline autoPlay muted width={200} height={200}></video>

            <button onClick={takePhoto}>Take photo</button>

            <canvas id="canvas" width={200} height={200}></canvas>
        </div>
    )
}