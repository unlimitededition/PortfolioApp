public var guiButton : Texture;
public var levelSelect : String;

function OnGUI()
{
	GUI.depth = 0;

	if (GUI.Button(Rect(10,10,100,100), guiButton, GUIStyle.none))
	{
	Application.LoadLevel (levelSelect);
	}
}