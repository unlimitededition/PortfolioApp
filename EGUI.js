//loads a sequence of images from Resources folder. Expects images to be numbered from 0001 to (maximum) 9999.
//Returns the image sequence as an array
//filetype doesn't matter, as Resources.Load doesn't take a filetype (you leave it out of the the name)
public static function LoadSequence(namePrefix : String, length : int) : Array
{
    var bars = Array(length);
    var i=0;
    for (i=0;i<length;i++)
	    {
	        var j = i + 1;
	        if (j < 10){
	            //Debug.Log("loading " + namePrefix + "000" + j);
	            bars[i] = Resources.Load(namePrefix + "000" + j, Texture);
	        }
	        else if (j < 100){
	            //Debug.Log("loading " + namePrefix + "00" + j);
	            bars[i] = Resources.Load(namePrefix + "00" + j, Texture);
	        }
	        else if (j < 1000){
	        	//Debug.Log("loading " + namePrefix + "0" + j);
	            bars[i] = Resources.Load(namePrefix + "0" + j, Texture);
	        }
	        else{
	            bars[i] = Resources.Load(namePrefix + j, Texture);
	        }
	    }
	for (var value in bars)
	{
		print(value);
	}
    
    Debug.Log(namePrefix+" sequence has "+bars.length + " textures in it. Javascript array.");
    return bars;
}