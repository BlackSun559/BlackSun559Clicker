var Autoplay;

if(!Autoplay) Autoplay = {};

Autoplay.run = function()
{
	Autoplay.handleGoldenCookies();
}

Autoplay.handleGoldenCookies = function()
{
	for(sx in Game.shimmers) {
    var s=Game.shimmers[sx];
    if((s.type!="golden") || (s.life<Game.fps) || (!Game.Achievements["Early bird"].won)) { s.pop(); return; }
    if((s.life/Game.fps)<(s.dur-2) && (Game.Achievements["Fading luck"].won)) { s.pop(); return; }
	}
}

Autoplay.autoPlayer = setInterval(Autoplay.run, 500);