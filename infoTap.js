//pingPong Animation Button

function Update ()
{
		transform.localScale = Vector3(
				     Mathf.PingPong(Time.time, 1),transform.localScale.x, transform.localScale.y);
}