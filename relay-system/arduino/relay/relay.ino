#include <BufferedSerial.h>
#include <ByteBuffer.h>

BufferedSerial serial = BufferedSerial(256, 256);
ByteBuffer transmitBuffer;

void setup() {
  // Initialize the serial communication
  serial.init(0, 9600);
  serial.setPacketHandler(MessageReceiver);
  
  // Initialize the send buffer that we will use to send data
  transmitBuffer.init(30);

}

void loop() {
  serial.update();

}

void MessageReceiver(ByteBuffer* packet) {
  // Here we could do anything we want to the data but for now we will just send it back

  /*
    transmitBuffer.clear();
    while ( packet->getSize() > 0 )
    transmitBuffer.put( packet->get() );
    serial.sendSerialPacket( &transmitBuffer );
  */
  int bufferLenght = packet.getSize();
  char message[256] = {0};  // Set array to null
  for (int counter = 0; counter < bufferLenght; couter++;) {
    message[couter] = packet.get();
  }

  if (!strcmp(message, "MESSAGE-STRING")) {

  }
}

bool MessageTransmitter(char message[], int length) {
  if( !serial.isBusySending()) {
    transmitBuffer.clear();
    transmitBuffer.putInt(12345);
    serial.sendSerialPacket( &transmitBuffer );
  }
  return true;
}
void GetCharArray(char *buf, int count) {
  for (int counter = 0; counter < bufferLenght; couter++;) {
  }
}
