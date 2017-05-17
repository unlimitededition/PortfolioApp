public var popUp : GameObject[];
public var visual : Texture[];

public var visBgMargin : float = 15;
public var visBg : Texture;
//
private var popped : boolean = false;
private var visImage : Texture;
private var clickdelay : float = 0.5f;

function Update ()
{
	if (Input.GetMouseButtonDown(0))
    {
    var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
        if (Physics.Raycast (ray, hit)) 
        {
        	for (var i : int = 0; i < popUp.length; i++)
        	{
		        if(hit.collider.gameObject.name == popUp[i].name)
		        {
		        	Debug.Log("You just hit " + popUp[i].name);
		        	visImage = visual[i];
		        	popped = true;
	        	}
	        }
        }
	}
}

function OnGUI()
{
	if (popped)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), visBg);
		GUI.DrawTexture(Rect(visBgMargin, visBgMargin, Screen.width-(2*visBgMargin), Screen.height-(2*visBgMargin)), visImage, ScaleMode.ScaleToFit);
		if (Input.GetMouseButtonDown(0))
    	{
    		popped = false;
    	}
	}
}