using UnityEngine;
using System.Collections;

public class CameraPivot : MonoBehaviour
{
	public GameObject root;

	public int androidOffsetX = 90;
	public int androidOffsetY = 270;
	public int androidOffsetZ = 0;
	public int iosOffsetX = 90;
	public int iosOffsetY = 270;
	public int iosOffsetZ = 0;

	private float zOffset;

	void Awake()
	{
		Screen.sleepTimeout = SleepTimeout.NeverSleep;

		#if UNITY_IPHONE
		Vector3 offsetAngle = new Vector3(iosOffsetX, iosOffsetY, iosOffsetZ);
		root.transform.localEulerAngles = offsetAngle;
		#endif
		#if UNITY_ANDROID
		Vector3 offsetAngle = new Vector3(androidOffsetX, androidOffsetY, androidOffsetZ);
		root.transform.localEulerAngles = offsetAngle;
		#endif
	}
	
	void Start()
	{
		Input.gyro.enabled=true;
	}
	
	void Update()
	{
		#if UNITY_IPHONE
		Quaternion q1 = Input.gyro.attitude;
		Quaternion q2 = new Quaternion(-q1.x, -q1.y, q1.z, q1.w);
		transform.localRotation = q2;
		#endif
		
		#if UNITY_ANDROID
		Quaternion q1 = Input.gyro.attitude;
		Quaternion q2 = new Quaternion(-q1.x, -q1.y, q1.z, q1.w);
		transform.localRotation = q2;
		#endif

		if(Input.touchCount == 1)
		{
			Touch touch = Input.touches[0];
			
			zOffset = touch.deltaPosition.x;
			zOffset = zOffset*-0.1f;

			root.transform.localEulerAngles += new Vector3(0, zOffset, 0);
		}
	}
}