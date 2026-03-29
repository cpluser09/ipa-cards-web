import socket
import subprocess

def find_listening_process(port):
    try:
        # 尝试创建一个连接到目标端口的 socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex(('localhost', port))
        
        if result == 0:
            print(f"Port {port} is open and accepting connections")
            
            # 尝试使用 sockstat 命令（如果可用）
            try:
                output = subprocess.check_output(['sockstat', '-4'], text=True)
                for line in output.splitlines():
                    if str(port) in line and 'LISTEN' in line:
                        parts = line.split()
                        print(f"Process: {parts[0]} PID: {parts[1]}")
            except FileNotFoundError:
                print("sockstat command not found")
            
            # 尝试使用 netstat 命令（如果可用）
            try:
                output = subprocess.check_output(['netstat', '-tulpn'], text=True)
                for line in output.splitlines():
                    if str(port) in line and 'LISTEN' in line:
                        print(f"Process info: {line}")
            except FileNotFoundError:
                print("netstat command not found")
                
        else:
            print(f"Port {port} is closed or not accepting connections")
            
        sock.close()
        
    except Exception as e:
        print(f"Error checking port {port}: {e}")

if __name__ == "__main__":
    find_listening_process(8080)
    find_listening_process(8081)