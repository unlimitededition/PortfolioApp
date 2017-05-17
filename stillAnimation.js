var number_of_stills = 1;
var fps = 30;
var fileNameLocation : String;

private var endStill : float;
private var movie_stills = [];
private var stills : float;

private var play = true;

function Awake()
	{
		endStill = (number_of_stills - 2);
	    movie_stills = EGUI.LoadSequence(fileNameLocation, number_of_stills);
	}

function Update ()
	{
	    if(fps > 0)
	    {
	        if(play == true)
	        {
	            Player();
	        }
	    }
	    else
	    {
	          Debug.LogError("'fps' must be set to a value greater than 0.");
	    }
	}

function Player()
	{
		play = false;

        if(stills > endStill)
	        {
	            stills = 0;
	        }
	    
	    stills += 1;
	    var fps_fixer = fps*3;
	    var wait_time = 1.0/fps_fixer;
	    yield WaitForSeconds(wait_time);

		play = true;
    }

function OnGUI ()
	{
		Debug.Log("Playing frame number " + stills);
				
		GUI.depth = 1;
		GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), movie_stills[stills], ScaleMode.ScaleAndCrop);
	}