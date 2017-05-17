function Update()
{
	if(Input.touchCount == 1)
	{
		var touch : Touch;
		touch = Input.touches[0];
		
		var touchXplane : float = 0;
		touchXplane += touch.deltaPosition.x;
		
		transform.eulerAngles += Vector3(touchXplane, 0, 0);
	}
}