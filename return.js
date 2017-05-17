public var quitTexture : Texture;
public var quitTextureSize : float = 100;
public var quitTextureOffset : float = 15;

public var loadLevel : String;

function OnGUI()
{
	GUI.depth = 0;

	if (GUI.Button(Rect(quitTextureOffset, quitTextureOffset, quitTextureSize, quitTextureSize), quitTexture, GUIStyle.none))
	{
		Application.LoadLevel (loadLevel);
	}
}