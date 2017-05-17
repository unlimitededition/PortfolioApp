public var seqImg = new Texture[5];
public var bgBox : Texture;
public var seqTime : float = 1.0;
public var seqSize : float = 250;

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
		
	if (seqPlay)
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
		
		if (currentSeq == seqImg.length)
		{
			currentSeq -= seqImg.length;
		}
		
		//Debug.Log("Timer " + seqTimer);
		Debug.Log("Seq " + currentSeq);
	}
}

function OnGUI()
{	
	if (seqPlay)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), bgBox, ScaleMode.StretchToFill);

		GUI.DrawTexture(Rect(((Screen.width*.5)-(seqSize/2)), ((Screen.height*.5)-(seqSize/2)), seqSize, seqSize), seqImg[currentSeq], ScaleMode.ScaleToFit);
	}
}