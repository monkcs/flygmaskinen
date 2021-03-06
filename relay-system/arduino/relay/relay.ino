#include <BufferedSerial.h>
#include <ByteBuffer.h>
#include <SoftwareSerial.h>

BufferedSerial serial = BufferedSerial(256, 256);
ByteBuffer transmitBuffer;

SoftwareSerial serialToRaspberry(10, 11);                        // RX, TX pinout on Arduino Uno

void setup() {
  serial.init(0, 9600);                                          // Initialize the serial communication
  serial.setPacketHandler(MessageReceiver);                      // MessageReceiver will be called when a new "packet" arrive
  serialToRaspberry.begin(9600);                                 // Set the data rate for the SoftwareSerial port
  transmitBuffer.init(30);                                       // Initialize the send buffer that we will use to send data
}

void loop() {
  serial.update();

}

void MessageReceiver(ByteBuffer* packet) {
  int bufferLenght = packet->getSize();                          // Get the size of the message
  byte message[256] = {0};                                       // Set array to null
  for (int counter = 0; counter < bufferLenght; counter++) {    
    message[counter] = packet->get();                            // Copying all byte from packet into message[] array
  }

  if (!strcmp(message, "MESSAGE-STRING")) {
    // Do something, like sending data back to raspberry pi
  }
}

bool MessageTransmitter(byte *message[], int length) {
  if (!serial.isBusySending()) {
    transmitBuffer.clear();
    for (int counter = 0; counter <= length; counter++) {
      // Put one byte at the time into transmitBuffer
      transmitBuffer.put(message[counter]);
    }
    serial.sendSerialPacket( &transmitBuffer );
  }
  return true;
}
