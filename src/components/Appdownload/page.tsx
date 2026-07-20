export default function AppDownloadSection() {
    return (
        <section className="download-section">
            <div className="download-card">

                {/* Left Side */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Get the app now
                    </h2>
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-3xl min-h-80 min-w-68 sm:min-w-88 md:min-w-75  flex flex-col items-center justify-center gap-6">

                    {/* QR Code */}
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com"
                        alt="QR Code"
                        className="w-44 h-44"
                    />

                    {/* Store Buttons */}
                    <div className="flex gap-3 sm:flex-row flex-col ">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-10 cursor-pointer"
                        />

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                            alt="App Store"
                            className="h-10 cursor-pointer"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}