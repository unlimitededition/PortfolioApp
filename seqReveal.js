public var seqImg = new Texture[3];
public var seqTime : float = 2.0;
public var seqSize : float = 250;
public var bgBox : Texture;

public var img1Text : String = "img1Text";
public var img2Text : String = "img2Text";
public var img3Text : String = "img3Text";

public var mmoserSkin : GUISkin;

//

private var seqTimer : float;
private var currentSeq : int = 0;
private var seqPlay = true;

function Start()
{
	seqTimer = seqTime;
}

function Update()
{
	if (Input.GetMouseButtonDown (0))
	{
		seqPlay = false;
	}
		
	if (seqPlay && currentSeq < seqImg.length)
	{
		if(seqTimer > 0)
		{
			seqTimer -= Time.deltaTime;
		}
		if(seqTimer <= 0)
		{
			currentSeq ++;
			
			seqTimer = seqTime;
		}
		
		//Debug.Log("Timer " + seqTimer);
		Debug.Log("Seq " + currentSeq);
	}
}

function OnGUI()
{	
	GUI.skin = mmoserSkin;

	if (seqPlay)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), bgBox, ScaleMode.StretchToFill);
		
		if (currentSeq >= 1)
		{
			GUI.DrawTexture(Rect(((Screen.width*.25)-(seqSize/2)), ((Screen.height*.5)-(seqSize/2)), seqSize, seqSize), seqImg[0], ScaleMode.ScaleToFit);
			GUI.Box(Rect(((Screen.width*.25)-(seqSize/2)), ((Screen.height*.5)+(seqSize/2)), seqSize, 20), img1Text);
		}
		
		if (currentSeq >= 2)
		{
			GUI.DrawTexture(Rect(((Screen.width*.5)-(seqSize/2)), ((Screen.height*.5)-(seqSize/2)), seqSize, seqSize), seqImg[1], ScaleMode.ScaleToFit);
			GUI.Box(Rect(((Screen.width*.5)-(seqSize/2)), ((Screen.height*.5)+(seqSize/2)), seqSize, 50), img2Text);
		}
		
		if (currentSeq >= 3)
		{
			GUI.DrawTexture(Rect(((Screen.width*.75)-(seqSize/2)), ((Screen.height*.5)-(seqSize/2)), seqSize, seqSize), seqImg[2], ScaleMode.ScaleToFit);
			GUI.Box(Rect(((Screen.width*.75)-(seqSize/2)), ((Screen.height*.5)+(seqSize/2)), seqSize, 50), img3Text);
		}
	}
}