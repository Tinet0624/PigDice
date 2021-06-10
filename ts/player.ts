class Player{
    // score
    public _scoreThis : number;

    constructor(){
        this._scoreThis = 0;
    }

    //getter for score and active
    get scoreThis(){
        return this._scoreThis;
    }
}