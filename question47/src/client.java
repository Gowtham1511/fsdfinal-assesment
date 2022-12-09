

public class client {
	public static void main(String[] args) {
		PMWidgetFactory pWid=new PMWidgetFactory();
		pWid.CreateScrollBar();
		pWid.CreateWindow();
		MotifWidgetFactory mWid=new MotifWidgetFactory();
		mWid.CreateScrollBar();
		mWid.CreateWindow();
	}
}
