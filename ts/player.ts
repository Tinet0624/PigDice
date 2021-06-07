class Player{
    //what do i need??
    // score
    private _score: number;
    //Temp score
    private _tempScore : number;
    // active player turn

    constructor(){
    }

    //getter for score and active
    get score(){
        return this._score;
    }
    get tempScore(){
        return this._tempScore;
    }

}