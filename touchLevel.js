public var interact : GameObject[];
public var loadLevel : String[];

function Update ()
{
	#if UNITY_EDITOR || UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN || UNITY_WEBPLAYER
	if (Input.GetMouseButtonDown(0))
    {
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
        if (Physics.Raycast (ray, hit)) 
        {
        	for (var i : int = 0; i < interact.length; i++)
        	{
		        if(hit.collider.gameObject.name == interact[i].name)
		        {
		        	Debug.Log("You just hit " + interact[i].name);
		        	Application.LoadLevel (loadLevel[i]);
	        	}
	        }
        }
	}
	#else
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Began)
    {
    var ray = Camera.main.ScreenPointToRay (Input.GetTouch(0).position);
    var hit : RaycastHit;
    
        if (Physics.Raycast (ray, hit)) 
        {
        	for (var i : int = 0; i < interact.length; i++)
        	{
		        if(hit.collider.gameObject.name == interact[i].name)
		        {
		        	Debug.Log("You just hit " + interact[i].name);
		        	Application.LoadLevel (loadLevel[i]);
	        	}
	        }
        }
	}
	#endif
}