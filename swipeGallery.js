public var visual = new Texture[1];
public var slideTime : float = 2;
public var sensitivity : float = 2;

public var boxPos : float = 60;
public var boxSize : float = 50;
public var boxClr : Texture;

public var mmoserSkin : GUISkin;

private var slideSpeed : float = 0;
private var guiOffset : float = 0;
private var currentSlide : float = 0;
private var currentPos : float = 0;
private var screenWidth : float;

private var sliding = false;

function Start()
{
	screenWidth = Screen.width;
}

function OnGUI()
{	
	GUI.skin = mmoserSkin;
	
	for (var i = 0; i < visual.Length; i++)
	{
		GUI.DrawTexture(Rect(((i*screenWidth)+(guiOffset)),0,screenWidth,Screen.height), visual[i], ScaleMode.ScaleToFit);
	}
	
	GUI.Box(Rect((Screen.width-boxPos), (Screen.height-boxPos), boxSize, boxSize), boxClr, GUIStyle.none);
	GUI.Box(Rect((Screen.width-boxPos), (Screen.height-(boxPos-(boxPos/2.75))), boxSize, boxSize), ((currentSlide-1)*-1)+"/"+visual.length);
}

function Update()
{	
//	Debug.Log("gui offset "  + guiOffset);
//	Debug.Log("current position " + currentPos);
	Debug.Log("current slide " + currentSlide);
		
	slideSpeed = (Time.smoothDeltaTime*slideTime);
	
	guiOffset = Mathf.Lerp(guiOffset, currentPos, slideSpeed);

	if (Input.touches.Length>0)
	{
		var touchDelta : Vector2 = Input.GetTouch(0).deltaPosition;
		
		if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
		{
    		sliding = true;
    	}
    	
		if (touchDelta.x>sensitivity && currentSlide<0 && sliding)		//This was a flick to the right with magnitude of 5 or more
		{
			currentSlide ++;
			sliding = false;
		}
		
		if (touchDelta.x<-sensitivity && currentSlide>(-1*(visual.Length-1)) && sliding)	//This was a flick to the left with magnitude of 5 or more
		{
			currentSlide --;
			sliding = false;
		}
	
		currentPos = (currentSlide*screenWidth);
		
    }
}