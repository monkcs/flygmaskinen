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

  if(packet->getInt() == 12345) {
    digitalWrite(13, true);
    delay(200);
    digitalWrite(13, false);
  }
}
