public var quitTexture : Texture;
public var quitTextureSize : float = 100;
public var quitTextureOffset : float = 15;

 function Update()
 {
	if (Input.GetKeyDown(KeyCode.Escape)) 
	Application.Quit(); 
 }

function OnGUI()
{
	GUI.depth = 0;

	if (GUI.Button(Rect(Screen.width-(quitTextureOffset+quitTextureSize), quitTextureOffset, quitTextureSize, quitTextureSize), quitTexture, GUIStyle.none))
	{
		Application.Quit();
	}
}