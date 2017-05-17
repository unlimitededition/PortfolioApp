	//The standard mouse orbt script converted to work with touch devices (android and iOS) by Newtonians. Feel free to use or modify 
//Check out the blog http://newtonians3d.blogspot.com/
	
	using UnityEngine;
	using System.Collections;

	public class touchorbitzoom_tt : MonoBehaviour {
	private float x;
	private float y;
	public float xspeed = 4;
	public float yspeed = 4;
	private Touch touch;
	public float distance = 25;
	public Transform target;

	public float yMinLimit = 20;
	public float yMaxLimit = 90;

	public float perspectiveZoomSpeed = 0.1f;        // The rate of change of the field of view in perspective mode.
	public float orthoZoomSpeed = 0.1f;

	public float distanceMin = 15;
	public float distanceMax = 40;

	Rect margin;

	// Use this for initialization
	void Start ()
	{
		#if UNITY_IPHONE
		float iosSpeedMult = .75f;
		xspeed = xspeed * iosSpeedMult;
		yspeed = yspeed * iosSpeedMult;
		#endif
	}
	
	// Update is called once per frame
	void Update ()
	{	
		#if UNITY_EDITOR || UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN || UNITY_WEBPLAYER
		margin = new Rect(Screen.width * 0f, 0, Screen.width, Screen.height * 1.0f);

		if (Input.GetMouseButton(0))
		{
			// Do Stuff here
			x += Input.GetAxis("Mouse X")*10;
			y -= Input.GetAxis("Mouse Y")*10;

			//Debug.Log( "delta X : " + x);
			//Debug.Log( "delta Y : " + y);
		}
		#else
		margin = new Rect(Screen.width * 0f, 0, Screen.width, Screen.height * 1.0f);
		float count = Input.touchCount;
		for (int i = 0; i < count; i++) 
		{
			Touch tc = Input.GetTouch(i);
			if(margin.Contains(tc.position))
			{
				x += tc.deltaPosition.x * xspeed * 0.02f;
				y -= tc.deltaPosition.y * yspeed * 0.02f;
			}
		}
		#endif
		Quaternion rotation = Quaternion.Euler (Mathf.Clamp (y, 20, 90), x, 0);
		Vector3 position = rotation * (new Vector3(0.0f, 0.0f, -distance)) + target.position;
		
		transform.rotation = rotation;
		transform.position = position;

		//PinchSettings

		if (Input.touchCount == 2 || Input.GetAxis("Mouse ScrollWheel") != 0)
		{
			#if UNITY_EDITOR || UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN || UNITY_WEBPLAYER
			float deltaMagnitudeDiff =  Input.GetAxis("Mouse ScrollWheel");
			deltaMagnitudeDiff = (deltaMagnitudeDiff*100);
			#else
			// Store both touches.
			Touch touchZero = Input.GetTouch(0);
			Touch touchOne = Input.GetTouch(1);
			
			// Find the position in the previous frame of each touch.
			Vector2 touchZeroPrevPos = touchZero.position - touchZero.deltaPosition;
			Vector2 touchOnePrevPos = touchOne.position - touchOne.deltaPosition;
			
			// Find the magnitude of the vector (the distance) between the touches in each frame.
			float prevTouchDeltaMag = (touchZeroPrevPos - touchOnePrevPos).magnitude;
			float touchDeltaMag = (touchZero.position - touchOne.position).magnitude;
			
			// Find the difference in the distances between each frame.
			float deltaMagnitudeDiff = prevTouchDeltaMag - touchDeltaMag;
			#endif

			// If the camera is orthographic...
			if (camera.isOrthoGraphic)
				{
					// ... change the orthographic size based on the change in distance between the touches.
					camera.orthographicSize += deltaMagnitudeDiff * orthoZoomSpeed;
					
					// Make sure the orthographic size never drops below zero.
					camera.orthographicSize = Mathf.Max(camera.orthographicSize, 0.1f);
				}
			else
				{
					// Otherwise change the field of view based on the change in distance between the touches.
					distance = Mathf.Clamp(distance - (deltaMagnitudeDiff) * -perspectiveZoomSpeed, distanceMin, distanceMax);
					//camera.fieldOfView += deltaMagnitudeDiff * perspectiveZoomSpeed;
					
					// Clamp the field of view to make sure it's between 0 and 180.
					camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, 0.1f, 179.9f);
				}

			//Debug.Log("Scroll Value " + deltaMagnitudeDiff);
		}
	}
}