/* Leaderboard Script Last Updated 10/11/2022 */

var __leaderboardName__ = localStorage.getItem('z_leaderboard_username');

if(!__leaderboardName__) {
	__leaderboardName__ = 'Guest-'+__makeId__(5);
}

function __makeId__(length) {
	var result = '';
	var characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	  	result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function __setUsername__(username) {
	username = username ? String(username) : `Guest-${__makeId__(5)}`;
	localStorage.setItem('z_leaderboard_username', username);
}

function __saveScoreToDatabase__(game, score) {
	// Add a new item entry to the Firebase database.
	return firebase.firestore().collection(game).add({
		username: __leaderboardName__,
		game: game,
		score: score
	}).then(function() {
		console.log('Score saved');
	}).catch(function(error) {
		console.error('Error writing new score to database', error);
	});
}

function __getHighScores__(game, num) {
	//num = num || 10;
	num = 1;
	//var scoresArr = [];
	var scoresArr;
	// Create the query to load items and listen for new ones.
	var query = firebase.firestore().collection(game).orderBy('score', 'desc').limit(num).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            //scoresArr.push(doc.data().score);
            scoresArr = doc.data().score;
            var scoreId = `#${doc.data().game.replace('2048', 'score-2048')} .score`;
            var usernameId = `#${doc.data().game.replace('2048', 'score-2048')} .username`;
            document.querySelector(scoreId).innerHTML = doc.data().score;
            document.querySelector(usernameId).innerHTML = doc.data().username;
        });
    })
    .catch((error) => {
        console.log("Error getting scores.", error);
    });
    return scoresArr;
}