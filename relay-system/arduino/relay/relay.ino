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
  int bufferLenght = packet->getSize();                          // Get the size of the message
  char message[256] = {0};                                       // Set array to null
  for (int counter = 0; counter < bufferLenght; counter++) {    
    message[counter] = packet->get();                             // Copying all char from packet into message[] array
  }

  if (!strcmp(message, "MESSAGE-STRING")) {
    // Do something, like sending data back to raspberry pi
  }
}

bool MessageTransmitter(char *message[], int length) {
  if (!serial.isBusySending()) {
    transmitBuffer.clear();
    for (int counter = 0; counter <= length; counter++) {
      // Put one char at the time into transmitBuffer
      transmitBuffer.put(message[counter]);
    }
    serial.sendSerialPacket( &transmitBuffer );
  }
  return true;
}
