/*
* Contributions: Vinicius Rezendrix
*/
 
using UnityEngine;
using System.Collections;
 
public class moveOnMouseClick : MonoBehaviour
{
	private Transform myTransform;				// this transform
	private Vector3 destinationPosition;		// The destination Point
	private float destinationDistance;			// The distance between myTransform and destinationPosition
 	
	//DoubleTap vars
	float clicked = 0;
	float clicktime = 0;
	float clickdelay = 0.5f;
	
	public float moveSpeed;						// The Speed the character will move

	public GameObject ground;
 
	void Start ()
	{
		myTransform = transform;							// sets myTransform to this GameObject.transform
		destinationPosition = myTransform.position;			// prevents myTransform reset
	}
 
	//Double Tap
	bool DoubleClick(){
		if (Input.GetMouseButtonDown (0)) {
			clicked++;
			if (clicked == 1) clicktime = Time.time;
		}         
		if (clicked > 1 && Time.time - clicktime < clickdelay) {
			clicked = 0;
			clicktime = 0;
			return true;
		} else if (clicked > 2 || Time.time - clicktime > 1) clicked = 0;         
		return false;
	}

	void Update () {
 
		// keep track of the distance between this gameObject and destinationPosition
		destinationDistance = Vector3.Distance(destinationPosition, myTransform.position);
 
		if(destinationDistance < .5f){		// To prevent shakin behavior when near destination
			moveSpeed = 0;
		}
		else if(destinationDistance > .5f){			// To Reset Speed to default
			moveSpeed =5;
		}

		// Moves the Player on command
		if (DoubleClick())
		{
			//Plane playerPlane = new Plane(Vector3.up, myTransform.position);
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			RaycastHit hit;
 
			if (Physics.Raycast(ray, out hit))
			{
				destinationPosition = hit.point;
			}
		}

		if(destinationDistance > .5f){
			myTransform.position = Vector3.Lerp(myTransform.position, destinationPosition, moveSpeed * Time.deltaTime);
		}
	}
}