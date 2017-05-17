public var mmoserLogo : Texture;
public var brandLogo : Texture;

public var mmoserScale: float = 50;
public var brandScale : float = 50;

public var screenMargin : float = 15;
public var boxes : float = 150;

public var optA : Texture;
public var optALink : String;
public var optB : Texture;
public var optBLink : String;
public var optC : Texture;
public var optCLink : String;

public var optAText : String;
public var optBText : String;
public var optCText : String;

public var mmoserSkin : GUISkin;

//

private var mmoserAspect : float;
private var brandAspect : float;

//

function Start()
{
	mmoserAspect = mmoserLogo.width / mmoserLogo.height;
	
	brandAspect = brandLogo.width / brandLogo.height;
}

function OnGUI()
{
	GUI.skin = mmoserSkin;
	
	GUI.depth = 0;

	//Band
	//GUI.Box(Rect(0,(Screen.height*0.5)-50,Screen.width,100),"");
	//mmoserLogo
	GUI.DrawTexture(Rect(screenMargin, screenMargin, (mmoserScale*mmoserAspect), mmoserScale), mmoserLogo);
	//Branding
	GUI.DrawTexture(Rect(Screen.width-((brandScale*brandAspect)+screenMargin), (Screen.height-(screenMargin+brandScale)), (brandScale*brandAspect), brandScale), brandLogo);
	//Option A
	if (GUI.Button(Rect((Screen.width*0.25)-(boxes/2),(Screen.height*0.5)-(boxes/2), boxes, boxes), optA, GUIStyle.none))
		{
			Application.LoadLevel (optALink);
		}
	//Option B
	if (GUI.Button(Rect((Screen.width*0.5)-(boxes/2),(Screen.height*0.5)-(boxes/2), boxes, boxes), optB, GUIStyle.none))
		{
			Application.LoadLevel (optBLink);
		}
	//Option C
	if (GUI.Button(Rect((Screen.width*0.75)-(boxes/2),(Screen.height*0.5)-(boxes/2), boxes, boxes), optC, GUIStyle.none))
		{
			Application.LoadLevel (optCLink);
		}
		
	GUI.Box(Rect(((Screen.width*.25)-(boxes/2)), ((Screen.height*.5)+(boxes/2)+screenMargin), boxes, 50), optAText);
	GUI.Box(Rect(((Screen.width*.5)-(boxes/2)), ((Screen.height*.5)+(boxes/2)+screenMargin), boxes, 50), optBText);
	GUI.Box(Rect(((Screen.width*.75)-(boxes/2)), ((Screen.height*.5)+(boxes/2)+screenMargin), boxes, 50), optCText);
}