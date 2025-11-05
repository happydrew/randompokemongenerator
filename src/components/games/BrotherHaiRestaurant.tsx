import React from "react";

const BrotherHaiRestaurant: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-black text-gray-100">
      {/* Hero Section with Background */}
      <div
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://img.itch.zone/aW1nLzIzNzUxOTgwLnBuZw==/315x250%23c/KfFzui.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500 drop-shadow-2xl"
            style={{ textShadow: '0 0 30px rgba(239, 68, 68, 0.8), 0 0 60px rgba(220, 38, 38, 0.6)' }}>
            Brother Hai's Pho Restaurant
          </h1>
          <p className="text-xl md:text-3xl mb-4 text-yellow-400 font-semibold drop-shadow-lg">
            Tiệm Phở Của Anh Hai
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The viral Vietnamese horror game that took the internet by storm.
            Experience a haunting journey through a mysterious pho restaurant in rural Vietnam.
          </p>
          <a
            href="https://marisa0704.itch.io/brother-hais-pho-restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
          >
            🎮 Download FREE Now
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Introduction Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 border-2 border-red-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6 text-red-400 border-b-2 border-red-700 pb-4">
              🔥 The Viral Sensation Taking the Internet by Storm
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-200">
              <strong className="text-yellow-400">Brother Hai's Pho Restaurant</strong> (Tiệm Phở Của Anh Hai) has taken the gaming world by storm,
              becoming an unexpected viral phenomenon. This free Vietnamese indie game has captured the attention of millions,
              with searches for "<strong>brother hai restaurant</strong>," "<strong>phở anh hai</strong>," and "<strong>brother hai pho restaurant</strong>"
              skyrocketing on Google and social media platforms.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Released on <strong className="text-red-400">October 23, 2024</strong>, on itch.io by developer <strong className="text-yellow-400">marisa0704</strong>,
              this horror-infused business simulation game has resonated with players worldwide, proving that compelling storytelling
              and cultural authenticity can create a gaming sensation overnight.
            </p>
          </div>
        </section>

        {/* What is the Game Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">What is Brother Hai's Pho Restaurant?</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🎮 Game Overview</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                <strong>Brother Hai's Pho Restaurant</strong> is a free-to-play indie game that masterfully blends horror,
                business simulation, and adventure storytelling. Developed by a talented student from Hanoi University of
                Science and Technology using the Godot Engine, this game stands out for its uniquely Vietnamese perspective
                and cultural authenticity.
              </p>

              {/* Image Placeholder */}
              <div className="w-full h-64 bg-gray-700/50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="https://img.itch.zone/aW1hZ2UvMzk4MDI0MC8yMzczNzA5NC5wbmc=/794x1000/W7TPGb.png"
                  alt="Brother Hai's Pho Restaurant Gameplay"
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">📊 Quick Facts</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Title</td>
                    <td className="py-2 text-gray-200">Brother Hai's Pho Restaurant / Tiệm Phở Của Anh Hai</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Developer</td>
                    <td className="py-2 text-gray-200">marisa0704</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Release Date</td>
                    <td className="py-2 text-gray-200">October 23, 2024</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Platform</td>
                    <td className="py-2 text-gray-200">itch.io (Free Download)</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Supported OS</td>
                    <td className="py-2 text-gray-200">Windows, Linux</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Languages</td>
                    <td className="py-2 text-gray-200">Vietnamese, English</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Game Length</td>
                    <td className="py-2 text-gray-200">30-60 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 font-semibold text-red-400">Engine</td>
                    <td className="py-2 text-gray-200">Godot Engine</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-red-400">Genre</td>
                    <td className="py-2 text-gray-200">Horror, Business Sim, Adventure RPG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-br from-red-950/40 to-gray-900/40 border border-yellow-700/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">📖 The Story Behind Brother Hai Restaurant</h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-200">
              In <strong className="text-red-400">brother hai pho restaurant</strong>, you step into the shoes of Anh Hai,
              a pho restaurant owner who has just opened his shop in what appears to be a peaceful village in Dan Phuong District, Hanoi.
              The game begins innocently enough—you're cooking pho, serving customers, and getting to know the friendly locals.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              However, as you progress through the game, you'll gradually uncover dark mysteries lurking beneath the village's
              seemingly tranquil surface. The <strong className="text-red-400">brother hai restaurant</strong> experience combines
              everyday Vietnamese life with supernatural horror elements, creating an atmosphere that is both familiar and unsettling.
            </p>
          </div>
        </section>

        {/* Why is it Popular Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">Why is Brother Hai Restaurant So Popular?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-700/40 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-600/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">🇻🇳 Authentic Vietnamese Culture</h3>
              <p className="text-gray-200 leading-relaxed">
                Unlike many horror games, <strong>phở anh hai</strong> draws from real Vietnamese culture and folklore.
                The setting, characters, and narrative all feel authentically Vietnamese, resonating deeply with local players
                while offering international audiences a unique cultural perspective.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-yellow-900/20 border border-red-700/40 rounded-lg p-6 backdrop-blur-sm hover:border-red-600/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">🎭 Unexpected Gameplay Mix</h3>
              <p className="text-gray-200 leading-relaxed">
                The combination of peaceful business simulation with psychological horror creates a compelling gameplay experience.
                You'll find yourself genuinely engaged in running your pho restaurant before the game's darker elements emerge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-yellow-900/20 border border-red-700/40 rounded-lg p-6 backdrop-blur-sm hover:border-red-600/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">🎥 YouTube and Social Media Buzz</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                Major YouTubers have helped propel <strong>brother hai restaurant</strong> to viral status:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-red-400">Kubz Scouts</strong> (6.3M+ subscribers): "I didn't know what to expect, but the game exceeded my expectations."</li>
                <li><strong className="text-red-400">Hat Snow Player</strong> (1.84M+ subscribers): Called it "Game of the Year"</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-700/40 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-600/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">💰 Free and Accessible</h3>
              <p className="text-gray-200 leading-relaxed">
                Being completely free on <strong>brother hai restaurant itch io</strong> has removed any barriers to entry,
                allowing the game to spread rapidly through word-of-mouth recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Download Section - SPECIAL FOCUS */}
        <section className="mb-20" id="download">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-red-400">
                ⬇️ How to Download Brother Hai's Pho Restaurant
              </h2>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6 mb-8">
                <p className="text-xl text-center text-yellow-400 font-semibold mb-2">
                  ⚠️ Download Only from Official Source
                </p>
                <p className="text-center text-gray-300">
                  Always download from the official itch.io page to ensure safety and support the developer.
                </p>
              </div>

              {/* Image Placeholder for Download Page */}
              <div className="w-full h-80 bg-gray-800/50 rounded-xl flex items-center justify-center mb-8 overflow-hidden border-2 border-red-700/50">
                <img
                  src="https://img.itch.zone/aW1nLzIzNzM3NTgzLnBuZw==/original/dHvwpw.png"
                  alt="Brother Hai Restaurant Download Page"
                  className="size-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">📥 Step-by-Step Download Guide</h3>
                  <ol className="space-y-4 text-gray-200">
                    <li className="flex items-start">
                      <span className="flex size-8 bg-red-600 rounded-full items-center justify-center mr-3 shrink-0 font-bold">1</span>
                      <div>
                        <strong className="text-red-400">Visit the Official Itch.io Page</strong>
                        <p className="text-sm text-gray-400 mt-1">Navigate to marisa0704.itch.io/brother-hais-pho-restaurant - the official source for <strong>brother hai's pho restaurant itch io</strong></p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex size-8 bg-red-600 rounded-full items-center justify-center mr-3 shrink-0 font-bold">2</span>
                      <div>
                        <strong className="text-red-400">Choose Your Platform</strong>
                        <p className="text-sm text-gray-400 mt-1">Windows or Linux versions available. The game file is relatively small (typically under 500MB)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex size-8 bg-red-600 rounded-full items-center justify-center mr-3 shrink-0 font-bold">3</span>
                      <div>
                        <strong className="text-red-400">Click Download Button</strong>
                        <p className="text-sm text-gray-400 mt-1">No payment required - it's 100% FREE! Use the direct download link below</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex size-8 bg-red-600 rounded-full items-center justify-center mr-3 shrink-0 font-bold">4</span>
                      <div>
                        <strong className="text-red-400">Extract and Play</strong>
                        <p className="text-sm text-gray-400 mt-1">Extract the ZIP file to your preferred location. No installation necessary—simply run the executable!</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">💻 System Requirements</h3>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-red-900/50">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold text-red-400">OS</td>
                          <td className="py-3 text-gray-200">Windows 7+ or Linux</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold text-red-400">Processor</td>
                          <td className="py-3 text-gray-200">Dual-core 2.0 GHz+</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold text-red-400">Memory</td>
                          <td className="py-3 text-gray-200">2 GB RAM</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold text-red-400">Graphics</td>
                          <td className="py-3 text-gray-200">OpenGL 2.1 compatible</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 font-semibold text-red-400">Storage</td>
                          <td className="py-3 text-gray-200">1 GB available space</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold text-red-400">Additional</td>
                          <td className="py-3 text-gray-200">Mouse and Keyboard</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Direct Download Button */}
              <div className="text-center">
                <a
                  href="https://marisa0704.itch.io/brother-hais-pho-restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-2xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' }}
                >
                  🎮 Direct Download Link - Brother Hai Restaurant
                </a>
                <p className="text-gray-400 mt-4">100% Free • No Registration Required • Instant Download</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">How to Play Brother Hai's Pho Restaurant</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🍜 Business Simulation</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>Cooking Pho:</strong> Prepare authentic Vietnamese pho for customers</li>
                <li>• <strong>Serving Customers:</strong> Interact with villagers and build relationships</li>
                <li>• <strong>Restaurant Management:</strong> Keep your business running smoothly</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🔍 Exploration</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>Village Exploration:</strong> Discover secrets of Dan Phuong</li>
                <li>• <strong>Character Interactions:</strong> Talk to locals to uncover mystery</li>
                <li>• <strong>Clue Collection:</strong> Piece together what's happening</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">⚔️ Survival</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>Protect Mr. Gold:</strong> Keep your dog safe from thieves</li>
                <li>• <strong>Make Decisions:</strong> Choices affect endings</li>
                <li>• <strong>Confront Darkness:</strong> Face supernatural threats</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-red-900/30 border border-red-800/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">🎮 Controls</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-200">
              <div>• <strong className="text-red-400">WASD/Arrow Keys:</strong> Movement</div>
              <div>• <strong className="text-red-400">E/Enter:</strong> Interact</div>
              <div>• <strong className="text-red-400">ESC:</strong> Pause menu</div>
              <div>• <strong className="text-red-400">Mouse:</strong> Select dialogue options</div>
            </div>
          </div>
        </section>

        {/* Game Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">Game Features & What Makes It Unique</h2>

          {/* Image Placeholder */}
          <div className="w-full h-96 bg-gray-800/50 rounded-xl flex items-center justify-center mb-8 overflow-hidden border-2 border-red-700/50">
            <img
              src="https://img.itch.zone/aW1hZ2UvMzk4MDI0MC8yMzczNzA5My5wbmc=/794x1000/ie99rF.png"
              alt="Brother Hai Pho Restaurant Features"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Multiple Endings */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">🎭 Multiple Endings</h3>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              <strong className="text-red-400">Brother hai's pho restaurant</strong> features <strong>4 different endings</strong> based on your decisions throughout the game.
              Your choices regarding how you run your restaurant, interact with villagers, and respond to supernatural events will determine your fate.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold text-green-400 mb-2">Good Ending</h4>
                <p className="text-sm text-gray-300">Most positive outcome</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">💀</div>
                <h4 className="font-bold text-red-400 mb-2">Bad Ending</h4>
                <p className="text-sm text-gray-300">Tragic conclusion</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🔮</div>
                <h4 className="font-bold text-yellow-400 mb-2">Secret Ending</h4>
                <p className="text-sm text-gray-300">Requires specific actions</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold text-blue-400 mb-2">True Ending</h4>
                <p className="text-sm text-gray-300">Reveals full truth</p>
              </div>
            </div>
          </div>

          {/* Other Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-900/20 to-yellow-900/20 border border-red-800/40 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">🇻🇳 Cultural Authenticity</h4>
              <p className="text-gray-200 leading-relaxed mb-3">
                From the pho-cooking mechanics to the rural Vietnamese setting, every aspect of <strong>phở anh hai</strong> feels genuine:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Authentic Vietnamese dialogue and settings</li>
                <li>Traditional pho preparation methods</li>
                <li>Cultural references Vietnamese players recognize</li>
                <li>Folklore and supernatural elements from Vietnamese tradition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-800/40 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-yellow-400">👻 Atmospheric Horror</h4>
              <p className="text-gray-200 leading-relaxed mb-3">
                Rather than relying on jump scares, <strong>brother hai restaurant</strong> builds tension through:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Unsettling atmosphere and environmental storytelling</li>
                <li>Psychological horror elements</li>
                <li>Gradual reveal of darker narrative threads</li>
                <li>Contrast between mundane activities and sinister undertones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">🎬 Watch Gameplay on YouTube</h2>

          {/* Image Placeholder */}
          <div className="w-full h-96 bg-gray-800/50 rounded-xl flex items-center justify-center mb-8 overflow-hidden border-2 border-red-700/50">
            <img
              src="https://i.ytimg.com/vi/0bz6TyaQhSE/sddefault.jpg"
              alt="Brother Hai Restaurant Horror Scene"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            The <strong className="text-red-400">brother hai restaurant</strong> phenomenon has been significantly amplified by YouTube content creators.
            Here are some of the most popular channels covering the game:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-900/20 to-purple-900/20 border border-purple-700/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">🎮 Top YouTubers</h3>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <strong className="text-red-400">Kubz Scouts</strong> (6.3M+ subscribers)
                  <p className="text-sm text-gray-400 italic">"I didn't know what to expect, but the game exceeded my expectations."</p>
                </li>
                <li>
                  <strong className="text-red-400">Hat Snow Player</strong> (1.84M+ subscribers)
                  <p className="text-sm text-gray-400 italic">"Good game, mixed with many top stories. For me, this is the Game of the Year."</p>
                </li>
                <li>
                  <strong className="text-red-400">ManlyBadassHero</strong> - Known for indie horror games
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-red-900/20 border border-red-700/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">📺 Video Placeholder</h3>
              <div className="bg-gray-900/70 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">🎥 YouTube Video Embed</p>
                  <p className="text-sm text-gray-500">Search "Brother Hai Pho Restaurant" on YouTube</p>
                  <p className="text-xs text-gray-600 mt-2">[Video embed placeholder - replace with actual YouTube iframe]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Links */}
          <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 border border-purple-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">🎬 Watch Popular Playthroughs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0bz6TyaQhSE?si=0DhJATSK6EAR2Sbs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TPEbY7E_hwM?si=iPj61MBzFhAQ6VMT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ChMnS91dxG8?si=aP6oFQdyFF3uI2HU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">💡 Tips & Tricks for Playing</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900/40 border border-green-700/40 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-400">For New Players</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <div>
                    <strong>Take Your Time</strong> - Don't rush through customer interactions. Pay attention to dialogue.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <div>
                    <strong>Explore Thoroughly</strong> - Check every corner and interact with all objects and characters.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <div>
                    <strong>Watch Mr. Gold</strong> - Don't leave your dog unattended. His storyline connects to major plot points.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <div>
                    <strong>Save Often</strong> - Use save points before major decisions to explore different story branches.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/40 border border-yellow-700/40 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">For Achievement Hunters</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">★</span>
                  <div>
                    <strong>Multiple Playthroughs Required</strong> - Experience all 4 endings (30-60 minutes each).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">★</span>
                  <div>
                    <strong>Document Your Choices</strong> - Keep track of which decisions lead to which endings.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">★</span>
                  <div>
                    <strong>Experiment</strong> - Try different approaches: be more or less social with villagers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">★</span>
                  <div>
                    <strong>Join Community</strong> - Share findings on itch.io comments and Reddit discussions.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-red-400">❓ Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Is Brother Hai's Pho Restaurant free?</h3>
              <p className="text-gray-200">
                Yes! <strong>Brother hai restaurant</strong> is completely free to download and play on itch.io.
                There are no in-game purchases or hidden costs.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Where can I download Brother Hai Restaurant?</h3>
              <p className="text-gray-200">
                Download <strong>brother hai's pho restaurant</strong> from the official itch.io page or use our
                <a href="#download" className="text-red-400 hover:text-red-300 underline ml-1">direct download link above</a>.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Is the game available in English?</h3>
              <p className="text-gray-200">
                Yes, <strong>phở anh hai</strong> supports both Vietnamese and English languages.
                You can select your preferred language in the game settings.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">How long does it take to complete?</h3>
              <p className="text-gray-200">
                A single playthrough takes approximately 30 minutes to 1 hour. To see all 4 endings, expect 2-4 hours total.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Is Brother Hai's Pho Restaurant scary?</h3>
              <p className="text-gray-200">
                <strong>Brother hai restaurant</strong> focuses more on atmospheric tension and psychological horror
                rather than jump scares. The horror elements gradually build as the story progresses.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Can I play on Mac?</h3>
              <p className="text-gray-200">
                Currently, <strong>brother hai restaurant download</strong> is only officially available for Windows and Linux.
                Mac users might be able to run it using compatibility software like Wine, but this isn't officially supported.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-red-950 rounded-2xl p-12 text-center">

              {/* Image Placeholder */}
              <div className="w-full max-w-2xl mx-auto h-80 bg-gray-800/50 rounded-xl flex items-center justify-center mb-8 overflow-hidden border-2 border-red-700/50">
                <img
                  src="https://i.ytimg.com/vi/QKN5kdGJVp0/hqdefault.jpg"
                  alt="Brother Hai's Pho Restaurant Game Art"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                🎮 Start Your Horror Journey Now!
              </h2>

              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the game that has captured the internet's imagination. See for yourself why
                <strong className="text-yellow-400"> brother hai's pho restaurant</strong> has become
                the indie gaming phenomenon of late 2024.
              </p>

              <div className="bg-gray-900/50 rounded-xl p-8 mb-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">✅ Key Takeaways</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>Free to play</strong> on itch.io</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>Short but impactful</strong> (30-60 min)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>4 unique endings</strong> to discover</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>Authentic Vietnamese</strong> culture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>Perfect blend</strong> of genres</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-200"><strong>Strong community</strong> support</span>
                  </div>
                </div>
              </div>

              <a
                href="https://marisa0704.itch.io/brother-hais-pho-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-16 py-6 bg-white text-red-700 font-bold text-2xl md:text-3xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-100"
              >
                ⬇️ Download Brother Hai's Pho Restaurant FREE
              </a>
              <p className="text-gray-400 mt-6 text-lg">100% Free • No Registration Required • Windows & Linux</p>
            </div>
          </div>
        </section>

        {/* Keywords Footer */}
        <section className="text-center text-sm text-gray-600 pb-8">
          <p className="italic">
            Keywords: brother hai restaurant, brother hai pho restaurant, phở anh hai, brother hai restaurant itch io,
            brother hai pho, pho anh hai, phở anh hai game, brother hai restaurant download, itch io brother hai phở,
            vietnamese horror game, indie game 2024
          </p>
        </section>

      </div>
    </div>
  );
};

export default BrotherHaiRestaurant;
