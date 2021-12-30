class FibIterator implements Iterator<number> {
    private previous = 1;
    private current = 0;

    next() {
        const value = this.previous + this.current
        this.previous = this.current
        this.current = value

        return {
            done: false,
            value
        }
    }
}

export const fibonacciSequence = () => new FibIterator()
