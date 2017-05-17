using UnityEngine;
using System.Collections;

public class pinchZoom : MonoBehaviour
{
	public float zoomMin = 20f;
	public float zoomMax = 80f;
	public float ZoomSpeed = 0.1f;        // The rate of change of the field of view in perspective mode.

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update ()
	{
		if (Input.touchCount == 2)
		{
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

			// Otherwise change the field of view based on the change in distance between the touches.
			camera.fieldOfView += deltaMagnitudeDiff * ZoomSpeed;
			
			// Clamp the field of view to make sure it's between 0 and 180.
			camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, zoomMin, zoomMax);
		}
	}
}
